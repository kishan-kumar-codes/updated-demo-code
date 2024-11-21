import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import "./GoogleMapStyle.css";
import Image from "next/image";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// import { employees } from "@/utils/statsTableData";
import Flag from "@/assets/images/hubspark/flag.png";
// import Screen from "../../../assets/images/BottomScreen.png";
import { ArrowBigDown } from "lucide-react";
import { ArrowBigUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ButtonGroup, Rating } from "@mui/material";
import { DecimalStar } from "../CustomComponents/DecimalStar";

interface Location {
  position: number;
  title: string;
  place_id: string;
  gps_coordinates: {
    latitude: number;
    longitude: number;
  };
  address: string;
  searchContexts: {
    searchLatitude: number;
    searchLongitude: number;
    position: number;
    distance: number;
    direction: string;
    missing?: boolean;
    title: string;
  }[];
  reviews: number;
  rating: number;
  type: string;
  types: string[];
}

interface Context {
  searchLatitude: number;
  searchLongitude: number;
  position: number;
  distance: number;
  direction: string;
  missing?: boolean;
  title: string;
}

interface AveragePositions {
  [placeId: string]: {
    averagePosition: number;
    title: string;
    reviews: number;
    rating: number;
    type: string;
    types: string[];
  };
}

interface Report {
  id: string;
  user: { id: string };
  date: string;
  keyword: string;
  locations: [Location];
}

type HandleKeywordChange = (event: string) => void;
const calculateAveragePosition = (contexts: Context[]) => {
  if (contexts.length === 0) return 0;
  return contexts.reduce((acc, ctx) => acc + ctx.position, 0) / contexts.length;
};

const findPreviousReportForKeyword = (
  reports: Report[],
  keyword: string,
  currentDate: string
) => {
  // Find the most recent previous report for the same keyword before the current date
  const previousReports = reports
    .filter(
      (report) =>
        report.keyword === keyword &&
        new Date(report.date) < new Date(currentDate)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return previousReports.length > 0 ? previousReports[0] : null;
};

const calculateKeywordDeltaAcrossAllKeywords = (
  currentReport: Report,
  previousReport: Report | null,
  placeId: string
) => {
  let keywordsUp = 0;
  let keywordsDown = 0;

  if (previousReport) {
    const previousLocationsByKeyword: { [keyword: string]: Location[] } = {};
    const currentLocationsByKeyword: { [keyword: string]: Location[] } = {};

    console.log("Previous Report Locations:", previousReport.locations);
    console.log("Current Report Locations:", currentReport.locations);

    // Organize locations by keyword, filtering by place_id
    previousReport.locations.forEach((location) => {
      if (location.place_id === placeId) {
        const keyword = previousReport.keyword;
        if (previousLocationsByKeyword[keyword]) {
          previousLocationsByKeyword[keyword].push(location);
        } else {
          previousLocationsByKeyword[keyword] = [location];
        }
      }
    });

    currentReport.locations.forEach((location) => {
      if (location.place_id === placeId) {
        const keyword = currentReport.keyword;
        if (currentLocationsByKeyword[keyword]) {
          currentLocationsByKeyword[keyword].push(location);
        } else {
          currentLocationsByKeyword[keyword] = [location];
        }
      }
    });

    console.log("Previous Locations By Keyword:", previousLocationsByKeyword);
    console.log("Current Locations By Keyword:", currentLocationsByKeyword);

    // Compare each keyword's average position between current and previous reports
    Object.keys(currentLocationsByKeyword).forEach((keyword) => {
      const currentKeywordLocations = currentLocationsByKeyword[keyword];
      const previousKeywordLocations = previousLocationsByKeyword[keyword];

      if (previousKeywordLocations && currentKeywordLocations) {
        const currentAveragePosition = calculateAveragePosition(
          currentKeywordLocations.flatMap((loc) => loc.searchContexts)
        );
        const previousAveragePosition = calculateAveragePosition(
          previousKeywordLocations.flatMap((loc) => loc.searchContexts)
        );

        console.log(
          `Keyword: ${keyword}, Current Avg Position: ${currentAveragePosition}, Previous Avg Position: ${previousAveragePosition}`
        );

        if (currentAveragePosition < previousAveragePosition) {
          keywordsUp++;
        } else if (currentAveragePosition > previousAveragePosition) {
          keywordsDown++;
        }
      }
    });
  }

  return { keywordsUp, keywordsDown };
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [monthDay, year] = formattedDate.split(", ");
  const [month, day] = monthDay.split(" ");

  const daySuffix =
    day.endsWith("1") && !day.endsWith("11")
      ? "st"
      : day.endsWith("2") && !day.endsWith("12")
        ? "nd"
        : day.endsWith("3") && !day.endsWith("13")
          ? "rd"
          : "th";

  return `${month} ${parseInt(day)}${daySuffix}\n${year}`;
};

const GoogleMapComponent: React.FC<{
  keywords: string[];
  locations: Location[][];
  reports: Report[];
}> = ({ keywords, locations, reports }) => {
  const [selectedKeywordIndex, setSelectedKeywordIndex] = useState<number>(0);
  const [selectedKeyword, setSelectedKeyword] = useState<string>(keywords[0]);
  const [currentLocations, setCurrentLocations] = useState<Location[]>(
    locations[0]
  );
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [allKeywordsAverage, setAllKeywordsAverage] = useState<number | null>(
    null
  );
  const [keywordsDelta, setKeywordsDelta] = useState<{
    keywordsUp: number;
    keywordsDown: number;
  }>({ keywordsUp: 0, keywordsDown: 0 });
  const [averagePositions, setAveragePositions] = useState<AveragePositions>(
    {}
  );
  const [averagePosition, setAveragePosition] = useState<number | null>(null);
  const [overallAverageChange, setOverallAverageChange] = useState<
    number | null
  >(null);
  const [greenCircleCount, setGreenCircleCount] = useState(0);
  const [yellowCircleCount, setYellowCircleCount] = useState(0);
  const [redCircleCount, setRedCircleCount] = useState(0);
  const outerBarWidth = 302; // Fixed width for the outer bar
  const cornerRadius = 8.5; // Radius of the corners for rounded edges
  const outerBarHeight = 17;
  const containerRef1 = useRef<HTMLDivElement>(null);
  const [containerWidth1, setWidgetWidth] = useState(0);
  const [fillPercent1, setFillPercent1] = useState(0);
  const [fillPercent2, setFillPercent2] = useState(0);
  const [fillPercent3, setFillPercent3] = useState(0);

  const containerWidth = 304;

  const combinedKeywords = useMemo(() => {
    console.log(" these are the reports for the first time", reports);
    // Extract unique keywords from reports
    const uniqueReportKeywords = Array.from(
      new Set(reports.map((report) => report.keyword))
    );

    // Combine prop keywords and unique report keywords, removing duplicates
    return Array.from(new Set([...keywords, ...uniqueReportKeywords]));
  }, [keywords, reports]);

  useEffect(() => {
    const keyword = combinedKeywords[selectedKeywordIndex];
    const filtered = reports.filter((report) => report.keyword === keyword);

    // Sort filtered reports by date in ascending order
    filtered.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    setFilteredReports(filtered);
    setSelectedKeyword(keyword);

    if (scrollContainerRef.current) {
      const circleWidth = 42;
      const containerWidth = scrollContainerRef.current.clientWidth;
      const visibleCircles = Math.floor(containerWidth / circleWidth);
      const totalCircles = filtered.length + 20; // Total circles, including hardcoded ones
      // const totalCircles = filtered.length;

      const isOverflowing = totalCircles > visibleCircles;
      setIsOverflowing(isOverflowing);

      if (isOverflowing) {
        const remainingCircles = totalCircles - visibleCircles;

        if (remainingCircles > 0) {
          scrollContainerRef.current.scrollLeft =
            remainingCircles * circleWidth;
        } else {
          scrollContainerRef.current.scrollLeft = 0;
        }
      } else {
        scrollContainerRef.current.scrollLeft = 0;
      }
    }
  }, [combinedKeywords, selectedKeywordIndex, reports]);

  useEffect(() => {
    if (scrollContainerRef.current && isOverflowing) {
      const circleWidth = 42;
      const containerWidth = scrollContainerRef.current.clientWidth;
      const visibleCircles = Math.floor(containerWidth / circleWidth);
      //const totalCircles = filteredReports.length + 20;
      const totalCircles = filteredReports.length;

      const remainingCircles = totalCircles - visibleCircles;

      if (remainingCircles > 0) {
        scrollContainerRef.current.scrollLeft = remainingCircles * circleWidth;
      } else {
        scrollContainerRef.current.scrollLeft = 0;
      }
    }
  }, [isOverflowing, filteredReports.length]);

  const handleKeywordChange: HandleKeywordChange = (event: string) => {
    console.log("changes", event);
    const index = parseInt(event, 10);
    const newSelectedKeyword = combinedKeywords[index];
    setSelectedKeywordIndex(index);

    if (keywords.includes(newSelectedKeyword)) {
      // If the newly selected keyword is part of the keywords prop, use the locations array
      setCurrentLocations(locations[index]);
    } else {
      // If the selected keyword is not part of the keywords prop, find the most recent report for that keyword
      const mostRecentReport = reports
        .filter((report) => report.keyword === newSelectedKeyword)
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )[0];

      // Set current locations to the locations from the most recent report
      setCurrentLocations(mostRecentReport.locations);
    }
  };

  useEffect(() => {
    let totalAveragePosition = 0;
    let keywordCount = 0;

    let totalKeywordsUp = 0;
    let totalKeywordsDown = 0;
    let previousOverallAverage = 0;
    let currentOverallAverage = 0;

    // Calculate average positions and keywords delta for each keyword's locations
    locations.forEach((keywordLocations, index) => {
      console.log(
        "Processing locations for index:",
        index,
        "Keyword:",
        reports[index]?.keyword,
        "Locations:",
        keywordLocations
      );
      let keywordTotalPosition = 0;
      let keywordLocationCount = 0;

      keywordLocations.forEach((location) => {
        // Only consider locations with the specified place_id
        if (
          location.place_id === "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk" &&
          location.searchContexts.length > 0
        ) {
          const averagePos = calculateAveragePosition(location.searchContexts);
          keywordTotalPosition += averagePos;
          keywordLocationCount++;
        }
      });

      if (keywordLocationCount > 0) {
        const keywordAveragePosition =
          keywordTotalPosition / keywordLocationCount;
        totalAveragePosition += keywordAveragePosition;
        keywordCount++;
      }

      // Calculate the delta for the current report and its previous report
      const correspondingReport = reports[index];
      if (correspondingReport) {
        const previousReport = findPreviousReportForKeyword(
          reports,
          correspondingReport.keyword,
          correspondingReport.date
        );

        if (previousReport) {
          const { keywordsUp, keywordsDown } =
            calculateKeywordDeltaAcrossAllKeywords(
              correspondingReport,
              previousReport,
              "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk"
            );
          totalKeywordsUp += keywordsUp;
          totalKeywordsDown += keywordsDown;

          // Calculate previous overall average
          previousReport.locations.forEach((prevLocation) => {
            if (
              prevLocation.place_id === "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk" &&
              prevLocation.searchContexts.length > 0
            ) {
              const prevAveragePos = calculateAveragePosition(
                prevLocation.searchContexts
              );
              previousOverallAverage += prevAveragePos;
            }
          });

          // Calculate current overall average
          correspondingReport.locations.forEach((currLocation) => {
            if (
              currLocation.place_id === "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk" &&
              currLocation.searchContexts.length > 0
            ) {
              const currAveragePos = calculateAveragePosition(
                currLocation.searchContexts
              );
              currentOverallAverage += currAveragePos;
            }
          });
        }
      }
    });

    if (keywordCount > 0) {
      const overallAverage = totalAveragePosition / keywordCount;
      setAllKeywordsAverage(overallAverage);
      console.log(
        `All Keywords Average for place_id "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk": ${overallAverage}`
      );

      // Calculate the overall average change
      const overallChange = currentOverallAverage - previousOverallAverage;
      setOverallAverageChange(overallChange);
    }

    setKeywordsDelta({
      keywordsUp: totalKeywordsUp,
      keywordsDown: totalKeywordsDown,
    });
    console.log(
      `Total keywords up: ${totalKeywordsUp}, Total keywords down: ${totalKeywordsDown}`
    );
  }, [locations, reports]);

  const handleCircleClick = (index: number) => {
    const clickedReport = filteredReports[index];
    if (clickedReport) {
      // Update the current locations with the locations of the clicked report
      setCurrentLocations(clickedReport.locations);

      let totalKeywordsUp = 0;
      let totalKeywordsDown = 0;

      // Find the previous report for the same keyword based on the date
      const previousReport = findPreviousReportForKeyword(
        filteredReports,
        clickedReport.keyword,
        clickedReport.date
      );

      if (previousReport) {
        const { keywordsUp, keywordsDown } =
          calculateKeywordDeltaAcrossAllKeywords(
            clickedReport,
            previousReport,
            "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk"
          );
        totalKeywordsUp += keywordsUp;
        totalKeywordsDown += keywordsDown;

        // Calculate overall average change
        let previousOverallAverage = 0;
        let currentOverallAverage = 0;

        previousReport.locations.forEach((prevLocation) => {
          if (
            prevLocation.place_id === "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk" &&
            prevLocation.searchContexts.length > 0
          ) {
            const prevAveragePos = calculateAveragePosition(
              prevLocation.searchContexts
            );
            previousOverallAverage += prevAveragePos;
          }
        });

        clickedReport.locations.forEach((currLocation) => {
          if (
            currLocation.place_id === "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk" &&
            currLocation.searchContexts.length > 0
          ) {
            const currAveragePos = calculateAveragePosition(
              currLocation.searchContexts
            );
            currentOverallAverage += currAveragePos;
          }
        });

        const overallChange = currentOverallAverage - previousOverallAverage;
        setOverallAverageChange(overallChange);
      }

      console.log(
        `Total keywords up: ${totalKeywordsUp}, Total keywords down: ${totalKeywordsDown}`
      );
    }
  };

  const renderElements = (count: number) => {
    const elements = [];

    // Render red circles and dates
    for (let i = 0; i < count - 1; i++) {
      const xPosition = 39 + i * 42; // Adjust spacing between paths
      elements.push(
        <g
          key={`group-${i}`}
          onClick={() => handleCircleClick(i)}
          style={{ cursor: "pointer" }}>
          <path
            d={`M${xPosition}.3638 17.7452C${xPosition}.2648 17.7452 ${xPosition}.0669 17.6562 ${xPosition}.0669 17.4783V0.928481C${xPosition}.0669 0.839504 ${xPosition}.1659 0.66156 ${xPosition}.3638 0.66156C${xPosition}.5617 0.66156 ${xPosition}.6606 0.750527 ${xPosition}.6606 0.928481V17.4783C${xPosition}.6606 17.6562 ${xPosition}.5617 17.7452 ${xPosition}.3638 17.7452Z`}
            fill="#6D6D6D"
          />
          <circle cx={xPosition.toString()} cy="8" r="5" fill="#CF232A" />
          <text
            x={xPosition.toString()}
            y="35"
            textAnchor="middle"
            fontSize="10"
            fill="black">
            {formatDate(filteredReports[i].date).split("\n")[0]}
          </text>
          <text
            x={xPosition.toString()}
            y="45"
            textAnchor="middle"
            fontSize="10"
            fill="black">
            {formatDate(filteredReports[i].date).split("\n")[1]}
          </text>
        </g>
      );
    }

    // Render yellow/white circle and the most recent date
    if (count > 0) {
      const yellowXPosition = 39 + (count - 1) * 42;
      elements.push(
        <g
          key="group-yellow"
          onClick={() => handleCircleClick(count - 1)}
          style={{ cursor: "pointer" }}>
          <path
            d={`M${yellowXPosition}.3638 17.7452C${yellowXPosition}.2648 17.7452 ${yellowXPosition}.0669 17.6562 ${yellowXPosition}.0669 17.4783V0.928481C${yellowXPosition}.0669 0.839504 ${yellowXPosition}.1659 0.66156 ${yellowXPosition}.3638 0.66156C${yellowXPosition}.5617 0.66156 ${yellowXPosition}.6606 0.750527 ${yellowXPosition}.6606 0.928481V17.4783C${yellowXPosition}.6606 17.6562 ${yellowXPosition}.5617 17.7452 ${yellowXPosition}.3638 17.7452Z`}
            fill="#6D6D6D"
          />
          <circle cx={yellowXPosition.toString()} cy="8" r="6" fill="#FAAC18" />
          <circle
            cx={yellowXPosition.toString()}
            cy="8"
            r="2.5"
            fill="#F4F4F4"
          />
          <text
            x={yellowXPosition.toString()}
            y="35"
            textAnchor="middle"
            fontSize="10"
            fill="black">
            {
              formatDate(
                filteredReports[filteredReports.length - 1].date
              ).split("\n")[0]
            }
          </text>
          <text
            x={yellowXPosition.toString()}
            y="45"
            textAnchor="middle"
            fontSize="10"
            fill="black">
            {
              formatDate(
                filteredReports[filteredReports.length - 1].date
              ).split("\n")[1]
            }
          </text>
        </g>
      );
    }

    // Adding 20 hardcoded circles for testing
    for (let i = count; i < count + 20; i++) {
      const xPosition = 39 + i * 42;
      elements.push(
        <g key={`group-hardcoded-${i}`}>
          <path
            d={`M${xPosition}.3638 17.7452C${xPosition}.2648 17.7452 ${xPosition}.0669 17.6562 ${xPosition}.0669 17.4783V0.928481C${xPosition}.0669 0.839504 ${xPosition}.1659 0.66156 ${xPosition}.3638 0.66156C${xPosition}.5617 0.66156 ${xPosition}.6606 0.750527 ${xPosition}.6606 0.928481V17.4783C${xPosition}.6606 17.6562 ${xPosition}.5617 17.7452 ${xPosition}.3638 17.7452Z`}
            fill="#6D6D6D"
          />
          <circle cx={xPosition.toString()} cy="8" r="5" fill="#00A2FF" />
          <text
            x={xPosition.toString()}
            y="35"
            textAnchor="middle"
            fontSize="10"
            fill="black">
            Test Date
          </text>
          <text
            x={xPosition.toString()}
            y="45"
            textAnchor="middle"
            fontSize="10"
            fill="black">
            2024
          </text>
        </g>
      );
    }

    return elements;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isOverflowing) return;
    isDragging.current = true;
    startX.current = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isOverflowing || !isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 2; // Scroll speed multiplier
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Function to calculate and update fill percentages
  useEffect(() => {
    const total = greenCircleCount + yellowCircleCount + redCircleCount;
    if (total > 0) {
      setFillPercent1((greenCircleCount / total) * 100);
      setFillPercent2((yellowCircleCount / total) * 100);
      setFillPercent3((redCircleCount / total) * 100);
    }
  }, [greenCircleCount, yellowCircleCount, redCircleCount]);

  // Function to retrieve top contexts based on a given latitude and longitude with a specific tolerance
  const getTopContexts = useCallback(
    (lat: number, lng: number, tolerance = 0.001) => {
      const contexts: Context[] = [];
      //console.log(`Searching for contexts near lat: ${lat}, lng: ${lng} with tolerance: ${tolerance}`);
      // Iterate through all locations to find matching search contexts
      currentLocations.forEach((location) => {
        location.searchContexts.forEach((context) => {
          //console.log(`Checking context at lat: ${context.searchLatitude}, lng: ${context.searchLongitude}`);
          // Check if the context falls within the specified latitude and longitude tolerance
          if (
            Math.abs(context.searchLatitude - lat) <= tolerance &&
            Math.abs(context.searchLongitude - lng) <= tolerance &&
            !context.missing
          ) {
            contexts.push({ ...context, title: location.title });
            //console.log(`Context added: ${context.title}`);
          }
        });
      });

      if (contexts.length === 0) {
        //console.log("No contexts found within the initial tolerance, expanding search...");
        return getTopContexts(lat, lng, tolerance * 2); // Recursively expand the search if no contexts found
      }

      // Sort the contexts by their position value
      contexts.sort((a, b) => a.position - b.position);

      // return both the top 3 contexts
      return {
        topThreeContexts: contexts.slice(0, 3),
      };
    },
    [currentLocations]
  );

  useEffect(() => {
    console.log(currentLocations);
    let greenCount = 0;
    let yellowCount = 0;
    let redCount = 0;

    let map: google.maps.Map;
    const initMap = async (): Promise<void> => {
      // Dynamically import the needed libraries
      const { Map, InfoWindow } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const specificLocation = currentLocations.find(
        (location) => location.place_id === "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk"
      );
      if (!specificLocation) {
        console.error("Specific location not found");
        return;
      }

      map = new Map(document.getElementById("map") as HTMLElement, {
        center: {
          lat: specificLocation.gps_coordinates.latitude,
          lng: specificLocation.gps_coordinates.longitude,
        },
        zoom: 12,
        mapId: "4388fa907a8b89bb",
      });

      // Calculate average positions for all locations upfront
      let averages: AveragePositions = {};
      currentLocations.forEach((location) => {
        if (location.searchContexts.length > 0) {
          averages[location.place_id] = {
            averagePosition: calculateAveragePosition(location.searchContexts),
            title: location.title,
            reviews: location.reviews,
            rating: location.rating,
            type: location.type,
            types: location.types,
          };

          if (location.place_id === "ChIJ2c6GcUgS04kRkJPQ8rJ1ewk") {
            setAveragePosition(averages[location.place_id].averagePosition);
          }
        }
      });

      setAveragePositions(averages);
      //console.log("Average Positions calculated:", averages);

      // Convert to an array, sort by averagePosition, and take the top 10
      const sortedAverages = Object.entries(averages)
        .map(([placeId, data]) => ({ placeId, ...data }))
        .sort((a, b) => a.averagePosition - b.averagePosition)
        .slice(0, 10);

      console.log("Top 10 Average Positions calculated:", sortedAverages);

      // Create an info window to share between circles
      const infoWindow = new InfoWindow();

      // Iterate over each search context associated with the specific location
      specificLocation.searchContexts.forEach((context) => {
        // Create a visual circle element corresponding to the context's position, where the createCircle function dynamically sets the circle's color
        const circle = createCircle(context.position);
        if (context.position <= 5) greenCount++;
        else if (context.position <= 9) yellowCount++;
        else redCount++;
        console.log(greenCount);
        const marker = new AdvancedMarkerElement({
          map,
          position: {
            lat: context.searchLatitude,
            lng: context.searchLongitude,
          },
          title: specificLocation.title,
          content: circle,
        });

        // Add an event listener to the marker for the 'click' event
        marker.addListener("click", () => {
          // Close any currently open info window to ensure that only one can be open at a time
          infoWindow.close();
          // Fetch contexts based on the marker's geographical location
          const { topThreeContexts } = getTopContexts(
            context.searchLatitude,
            context.searchLongitude
          );
          // Creates a formatted string with each context's details on a new line
          let dynamicContent = topThreeContexts
            .map(
              (ctx) =>
                //`${ctx.position}. ${ctx.title} (Distance: ${ctx.distance}m)`).join('<br>');
                // Append current context's position, specific location title, and distance below the 3rd position if its position is greater than 3
                /*if (context.position > 3 && topThreeContexts.length >= 3) {
                        dynamicContent += `<br>${context.position}. ${specificLocation.title} (Distance: ${context.distance}m)`;
                    }*/
                `<span style="font-weight: bold; font-size: 75%"><span style="background-color: #00914C; color: white; border-radius: 50%; padding: 1px 4px;">${ctx.position}</span></span><span style="padding-left: 8px">${ctx.title}</span>`
            )
            .join("<br>");
          if (context.position > 3 && topThreeContexts.length >= 3) {
            //dynamicContent += `<br>${context.position}. ${specificLocation.title} (Distance: ${context.distance}m)`;
            let circleStyle =
              "font-weight: bold; font-size: 75%; background-color: #00914C; color: white; border-radius: 50%; padding: 1px 4px;";
            let positionDisplayText =
              context.position > 20
                ? `${context.position}+`
                : `${context.position}`;
            if (context.position === 21) {
              circleStyle =
                "font-weight: bold; font-size: 75%; color: white; border-radius: 50%; padding: 1px 1px;";
            } else if (context.position > 9) {
              circleStyle =
                "font-weight: bold; font-size: 75%; color: white; border-radius: 50%; padding: 1px 3px;";
            }

            // Adjust background color based on position range
            if (context.position <= 5) {
              circleStyle += "background-color: #00914C;";
            } else if (context.position <= 9) {
              circleStyle += "background-color: #FAAC18;";
            } else {
              circleStyle += "background-color: #CF232A;";
            }

            dynamicContent += `<br><span style="${circleStyle}">${positionDisplayText}</span><span style="padding-left: 5px">${specificLocation.title}</span>`;
          }
          infoWindow.setContent(dynamicContent);
          infoWindow.open(map, marker);
        });
      });
      setGreenCircleCount(greenCount);
      setYellowCircleCount(yellowCount);
      setRedCircleCount(redCount);
    };

    initMap().then();
  }, [locations, currentLocations, getTopContexts]); // This effect runs when locations, currentLocations, or getTopContexts update

  // Defines a function to create a styled circle element based on the given position
  function createCircle(position: number) {
    const circle = document.createElement("div");
    const contextPosition = document.createElement("span");
    contextPosition.className = "context-position";
    contextPosition.textContent =
      position === 21 ? `${position}+` : `${position}`;

    // Determine which circle class to use based on the position
    circle.className =
      position <= 5
        ? "green-circle"
        : position <= 9
          ? "yellow-circle"
          : "red-circle";
    circle.appendChild(contextPosition);
    return circle;
  }

  // Convert to an array, sort by averagePosition, and take the top 10
  const sortedAverages = Object.entries(averagePositions)
    .map(([placeId, data]) => ({ placeId, ...data }))
    .sort((a, b) => a.averagePosition - b.averagePosition)
    .slice(0, 10);

  function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + "...";
    }
    return str;
  }

  useEffect(() => {
    const handleResize = () => {
      if (containerRef1.current) {
        setWidgetWidth(containerRef1?.current?.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [scrollContainerWidth, setScrollContainerRef] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (scrollContainerRef.current) {
        setScrollContainerRef(scrollContainerRef?.current?.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("this is the valuesssssssssss", filteredReports);

  return (
    <>
      <div className="md:px-14 bg-[#F4F4F4] md:py-4 px-4">
        <div className="flex justify-center rounded-2xl border w-full bg-[#E0E0E0]">
          <div className="w-full rounded-2xl">
            <div className="text-xl lg:text-[26px] text-left pl-4 lg:pl-8 w-full md:px-16 px-4  mx-auto rounded-xl font-bold p-2 lg:p-3 my-0 bg-[#631363] text-white ">
              Performance Overview
            </div>
            <div className=" w-full rounded-md py-0 md:py-4 mt-4">
              <div className="md:px-2 px-3 flex flex-col lg:flex-row gap-2 py-2">
                <div className="text-base w-full rounded-xl border bg-[#F4F4F4] p-2 font-semibold text-[#6D6D6D]">
                  <div className="flex flex-row justify-between items-center">
                    <div className="pl-3 text-xs md:text-sm flex items-center mt-2 lg:mt-1 justify-center lg:text-[20px]">
                      All Keywords Avg.
                    </div>
                    <div className="mt-2 lg:mt-0">
                      {allKeywordsAverage !== null && (
                        <ButtonGroup
                          variant="text"
                          aria-label="Basic button group">
                          <Button
                            variant="outline"
                            className="rounded-tr-none rounded-br-none bg-[#631363] h-8 px-5 mr-[0.20rem] text-white">
                            <div className="font-bold text-lg">
                              {allKeywordsAverage.toFixed(1)}
                            </div>
                          </Button>
                          <Button
                            className="bg-[#E0E0E0] rounded-tl-none rounded-bl-none h-8 px-2"
                            variant="outline">
                            <div className="font-bold text-lg">
                              {Math.abs(
                                keywordsDelta.keywordsUp -
                                  keywordsDelta.keywordsDown
                              ).toFixed(1)}
                            </div>
                            {keywordsDelta.keywordsUp -
                              keywordsDelta.keywordsDown >=
                            0 ? (
                              <ArrowBigUp
                                size={18}
                                color="#40F440"
                                fill="#40F440"
                              />
                            ) : (
                              <ArrowBigDown color="#CF232A" fill="#CF232A" />
                            )}
                          </Button>
                        </ButtonGroup>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-base w-full rounded-xl border-2 bg-[#F4F4F4] p-2 font-semibold text-[#6D6D6D]">
                  <div className="flex flex-row justify-between items-center">
                    <div className="pl-3 text-xs lg:text-[20px] md:text-sm">
                      Total Keywords
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <Button
                        className="bg-[#631363] px-7 text-white h-8"
                        variant="outline">
                        <div className="font-bold text-lg">
                          {combinedKeywords.length}
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="text-base w-full rounded-xl border-2 bg-[#F4F4F4] p-2 font-semibold text-[#6D6D6D]">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex items-center gap-2">
                      <ArrowBigUp color="#40F440" fill="#40F440" />
                      <div className="px-1 text-xs md:text-sm lg:text-[20px]">
                        Keywords Up
                      </div>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <Button
                        className="bg-[#631363] px-7 text-white h-8"
                        variant="outline">
                        <div className="font-bold text-lg">
                          {keywordsDelta.keywordsUp}
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="text-base w-full rounded-xl border-2 bg-[#F4F4F4] p-2 font-semibold text-[#6D6D6D]">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex items-center gap-2">
                      <ArrowBigDown color="#CF232A" fill="#CF232A" />
                      <div className="px-1 text-xs md:text-sm lg:text-[20px]">
                        Keywords Down
                      </div>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <Button
                        className="bg-[#631363] px-7 h-8 text-white"
                        variant="outline">
                        <div className="font-bold text-lg">
                          {keywordsDelta.keywordsDown}
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex pl-4">
                <div className="py-4 text-nowrap text-[#6D6D6D] font-semibold text-lg md:text-2xl lg:text-3xl">
                  Results for{" "}
                </div>
                <div className="mt-3">
                  <Select
                    onValueChange={handleKeywordChange}
                    value={selectedKeywordIndex.toString()}>
                    <SelectTrigger className="bg-[#E0E0E0] text-[#631363] font-bold text-xl h-[2.1rem] md:h-[2.6rem] pl-[0.25rem] border-none">
                      <SelectValue
                        className="text-[#631363] text-base 
               text-nowrap md:text-xl lg:text-2xl font-bold"
                        placeholder=""
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-2 border-[#631363] md:w-full rounded-2xl z-50">
                      {combinedKeywords.map((keyword, index) => (
                        <SelectItem
                          className="font-semibold lg:text-[20px] text-[#6D6D6D]"
                          key={index}
                          value={index.toString()}>
                          &#39; {keyword}&#39;
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* <div className="pl-4" style={{ marginTop: "20px" }}>
                <span className="text-[#6D6D6D] font-semibold">
                  Results for{" "}
                </span>
                <span className="text-[#631363] font-semibold">
                  &apos;{selectedKeyword}&apos;
                </span>
              </div> */}
              {/* <div className="pl-4">
                <label className="text-[#6D6D6D] text-sm font-semibold">
                  Select Keyword:{" "}
                </label>
                <select
                  onChange={handleKeywordChange}
                  value={selectedKeywordIndex}>
                  {combinedKeywords.map((keyword, index) => (
                    <option
                      key={index}
                      value={index}
                      className="bg-white border-2 border-[#631363] w-16">
                      {keyword}
                    </option>
                  ))}
                </select>
              </div> */}
              {/* <div
                className="mx-4 w-full"
                ref={scrollContainerRef}
                style={{
                  overflowX: isOverflowing ? "scroll" : "hidden",
                  whiteSpace: "nowrap",
                  width: "304px",
                  cursor: isOverflowing ? "grab" : "default",
                  userSelect: "none",
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}       
                onMouseLeave={handleMouseUp}>
                <svg
                  width={
                    isOverflowing
                      ? 304 + (filteredReports.length - 1) * 42
                      : 304
                  }
                  height="60"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="2" y="8" fill="black" />
                  {renderElements(filteredReports.length)}
                </svg>
              </div> */}
              <div className="px-2">
                <div
                  className="w-full"
                  ref={scrollContainerRef}
                  style={{
                    overflowX: isOverflowing ? "scroll" : "hidden",
                    whiteSpace: "nowrap",
                    cursor: isOverflowing ? "grab" : "default",
                    userSelect: "none",
                    msOverflowStyle: "none" /* IE and Edge */,
                    scrollbarWidth: "none" /* Firefox */,
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}>
                  <svg
                    width={
                      isOverflowing
                        ? scrollContainerWidth +
                          (filteredReports.length - 1) * 42 +
                          20 * 42
                        : scrollContainerWidth
                    }
                    height="60"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="2" y="8" fill="black" />
                    {renderElements(filteredReports.length)}
                  </svg>
                </div>
              </div>
              {/* <div className="py-2 my-4 md:py-10">
                <CustomizedSteppers currentStep={5} />
              </div> */}
              <div className="px-4 flex w-full flex-col lg:flex-row py-2 items-center justify-between gap-4">
                <div className="w-full flex items-center flex-col md:flex-row gap-2 pt-2">
                  <div className="bg-[#CF232A] flex flex-col items-center justify-center text-center font-semibold text-3xl h-20 lg:h-32 text-white w-full md:w-[50%] rounded-md">
                    {averagePosition !== null && (
                      <div className="text-sm  w-full lg:text-[42px]">
                        {averagePosition.toFixed(1)}
                      </div>
                    )}
                    <div className="text-white text-center lg:text-[24px] pt-4 font-semibold text-sm">
                      Average Map Rank{" "}
                    </div>
                  </div>
                  <div className=" font-bold  w-full border-2 py-4 text-3xl text-[#6D6D6D] lg:py-5 md:w-[50%] h-20 lg:h-32 flex flex-col items-center justify-center text-center border-[#6D6D6D] rounded-md">
                    <div className="flex justify-center w-full items-center">
                      {overallAverageChange !== null && (
                        <div className="text-3xl lg:text-[42px] text-center font-bold">
                          {Math.abs(overallAverageChange).toFixed(1)}
                        </div>
                      )}
                      <div className="pt-2">
                        {" "}
                        <ArrowBigUp size={20} color="#40F440" fill="#40F440" />
                      </div>
                    </div>
                    <div className="text-[#6D6D6D] text-center lg:text-[24px] pt-1 text-sm font-semibold">
                      Change
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="pt-2" ref={containerRef1}>
                    <div className="flex justify-between items-end">
                      <div className="md:text-sm text-xs lg:text-[18px] text-end font-semibold pb-1 text-[#6D6D6D]">
                        High-Ranking Grid Points
                      </div>
                      <div className="pr-2 lg:text-lg font-bold text-[#00914C]">
                        {greenCircleCount}
                      </div>
                    </div>
                    <div>
                      {/* Outer bar with rounded edges */}
                      <svg
                        width={containerWidth1}
                        height={outerBarHeight}
                        viewBox={`0 0 ${containerWidth1} ${outerBarHeight}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          width={containerWidth1}
                          height={outerBarHeight}
                          rx={cornerRadius}
                          ry={cornerRadius}
                          fill="#F4F4F4"
                        />
                        {/* Inner bar with rounded edges */}
                        <rect
                          width={containerWidth1 * (fillPercent1 / 100)}
                          height={outerBarHeight}
                          rx={
                            containerWidth1 * (fillPercent1 / 100) >=
                            cornerRadius
                              ? cornerRadius
                              : (containerWidth1 * (fillPercent1 / 100)) / 2
                          }
                          ry={
                            containerWidth1 * (fillPercent1 / 100) >=
                            cornerRadius
                              ? cornerRadius
                              : (containerWidth1 * (fillPercent1 / 100)) / 2
                          }
                          fill="#00914C"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" pt-2">
                    <div className="flex justify-between items-end">
                      <div className="md:text-sm text-xs lg:text-[18px] text-end font-semibold pb-1 text-[#6D6D6D]">
                        Medium-Ranking Grid Points
                      </div>
                      <div className="pr-2 lg:text-lg font-bold text-[#FAAC18]">
                        {yellowCircleCount}
                      </div>
                    </div>
                    {/* <div>
                      <svg
                        width={outerBarWidth}
                        height={outerBarHeight}
                        viewBox={`0 0 ${outerBarWidth} ${outerBarHeight}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          width={outerBarWidth}
                          height={outerBarHeight}
                          rx={cornerRadius}
                          ry={cornerRadius}
                          fill="#F4F4F4"
                        />
                        <rect
                          width={outerBarWidth * (fillPercent2 / 100)}
                          height={outerBarHeight}
                          rx={
                            outerBarWidth * (fillPercent2 / 100) >= cornerRadius
                              ? cornerRadius
                              : (outerBarWidth * (fillPercent2 / 100)) / 2
                          }
                          ry={
                            outerBarWidth * (fillPercent2 / 100) >= cornerRadius
                              ? cornerRadius
                              : (outerBarWidth * (fillPercent2 / 100)) / 2
                          }
                          fill="#FAAC18"
                        />
                      </svg>
                    </div> */}
                    <div>
                      {/* Outer bar with rounded edges */}
                      <svg
                        width={containerWidth1}
                        height={outerBarHeight}
                        viewBox={`0 0 ${containerWidth1} ${outerBarHeight}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          width={containerWidth1}
                          height={outerBarHeight}
                          rx={cornerRadius}
                          ry={cornerRadius}
                          fill="#F4F4F4"
                        />
                        {/* Inner bar with rounded edges */}
                        <rect
                          width={containerWidth1 * (fillPercent2 / 100)}
                          height={outerBarHeight}
                          rx={
                            containerWidth1 * (fillPercent2 / 100) >=
                            cornerRadius
                              ? cornerRadius
                              : (containerWidth1 * (fillPercent2 / 100)) / 2
                          }
                          ry={
                            containerWidth1 * (fillPercent2 / 100) >=
                            cornerRadius
                              ? cornerRadius
                              : (containerWidth1 * (fillPercent2 / 100)) / 2
                          }
                          fill="#FAAC18"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" pt-2">
                    <div className="flex justify-between items-end">
                      <div className="md:text-sm text-xs lg:text-[18px] text-end font-semibold pb-1 text-[#6D6D6D]">
                        Low-Ranking Grid Points
                      </div>
                      <div className="text-[#CF232A] lg:text-lg font-bold pr-2">
                        {redCircleCount}
                      </div>
                    </div>
                    {/* <div>
                      <svg
                        width={outerBarWidth}
                        height={outerBarHeight}
                        viewBox={`0 0 ${outerBarWidth} ${outerBarHeight}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          width={outerBarWidth}
                          height={outerBarHeight}
                          rx={cornerRadius}
                          ry={cornerRadius}
                          fill="#F4F4F4"
                        />
                        <rect
                          width={outerBarWidth * (fillPercent3 / 100)}
                          height={outerBarHeight}
                          rx={
                            outerBarWidth * (fillPercent3 / 100) >= cornerRadius
                              ? cornerRadius
                              : (outerBarWidth * (fillPercent3 / 100)) / 2
                          }
                          ry={
                            outerBarWidth * (fillPercent3 / 100) >= cornerRadius
                              ? cornerRadius
                              : (outerBarWidth * (fillPercent3 / 100)) / 2
                          }
                          fill="#CF232A"
                        />
                      </svg>
                    </div> */}
                    <div>
                      {/* Outer bar with rounded edges */}
                      <svg
                        width={containerWidth1}
                        height={outerBarHeight}
                        viewBox={`0 0 ${containerWidth1} ${outerBarHeight}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          width={containerWidth1}
                          height={outerBarHeight}
                          rx={cornerRadius}
                          ry={cornerRadius}
                          fill="#F4F4F4"
                        />
                        {/* Inner bar with rounded edges */}
                        <rect
                          width={containerWidth1 * (fillPercent3 / 100)}
                          height={outerBarHeight}
                          rx={
                            containerWidth1 * (fillPercent3 / 100) >=
                            cornerRadius
                              ? cornerRadius
                              : (containerWidth1 * (fillPercent3 / 100)) / 2
                          }
                          ry={
                            containerWidth1 * (fillPercent3 / 100) >=
                            cornerRadius
                              ? cornerRadius
                              : (containerWidth1 * (fillPercent3 / 100)) / 2
                          }
                          fill="#CF232A"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col w-full gap-2 p-4 md:px-24 px-4 py-10">
                <div className="font-semibold text-base w-full text-[#6D6D6D]">
                  <div className="flex justify-between w-full">
                    <div>High Ranking Grid Point</div>
                    <div className="text-[#00914C]">2</div>
                  </div>
                  <BorderLinearProgress value={38} />
                </div>
                <div className="font-semibold text-base text-[#6D6D6D]">
                  <div className="flex justify-between w-full">
                    <div> Medium-rank Grid Points</div>
                    <div className="text-[#FAAC18]">7</div>
                  </div>
                  <BorderLinearProgress value={58} />
                </div>
                <div className="font-semibold text-base text-[#6D6D6D]">
                  <div className="flex justify-between w-full">
                    <div> Low-rank Grid Points</div>
                    <div className="text-[#00914C]">16</div>
                  </div>
                  <BorderLinearProgress value={80} />
                </div>
              </div> */}
              <div className="h-64 md:h-96 w-[100vw] flex justify-center md:w-[60vw] relative left-1/2 right-1/2 -mx-[50vw] md:-mx-[30vw] mt-4 mb-2 z-40 bg-[#F4F4F4] overflow-x-hidden scrollbar-hidden">
                <div id="map" style={{ width: "87%", height: "1172px" }}></div>
              </div>
              <div className="font-semibold text-[#6D6D6D] lg:text-[30px] pt-2 lg:pt-4 text-xl px-4 bg-[#E0E0E0] p-1 flex flex-col lg:flex-row">
                <div className="tracking-tight">
                  {" "}
                  Overall Top Ranking Competitors
                </div>
                <div className="flex">
                  <div> for </div>
                  <div className="text-[#631363] ml-2 font-bold">
                    {" "}
                    ‘{selectedKeyword}’
                  </div>
                </div>
              </div>
              <p className="text-sm lg:text-[24px] pl-4 lg:font-normal text-[#6D6D6D] font-base tracking-tighter py-2">
                Top-performing search results competitors, based on the Grid
                Points for this keyword.
              </p>
              <Table className="bg-[#E0E0E0] mt-0 lg:mt-10">
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-[#631363] text-white text-center font-normal text-[10px]  lg:text-[30px] lg:font-bold  md:text-xs px-0.5 md:px-1">
                      Business Name
                    </TableHead>
                    <TableHead className="bg-[#631363] text-white  text-center font-normal text-[10px] lg:text-[30px] lg:font-bold md:text-xs px-0.5 md:px-1">
                      Avg. Rank
                    </TableHead>
                    <TableHead className="bg-[#631363] text-white text-center font-normal text-[10px] lg:text-[30px] lg:font-bold md:text-xs px-0.5 md:px-1">
                      Reviews
                    </TableHead>
                    <TableHead className="bg-[#631363] text-white text-center font-normal text-[10px] lg:text-[30px] lg:font-bold md:text-xs px-0">
                      Rating
                    </TableHead>
                    <TableHead className="bg-[#631363] text-white text-center font-normal text-[10px] lg:text-[30px] lg:font-bold md:text-xs px-0.5 md:px-1">
                      Primary Categories
                    </TableHead>
                    <TableHead className="bg-[#631363] text-white text-center font-normal text-[10px] lg:text-[30px] lg:font-bold md:text-xs px-0.5 md:px-1">
                      Additional Categories
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedAverages.map(
                    ({
                      placeId,
                      title,
                      averagePosition,
                      reviews,
                      rating,
                      type,
                      types,
                    }) => (
                      <TableRow
                        className="border-t-2 border-grey-200"
                        key={placeId}>
                        <TableCell className="font-normal border border-white p-1 lg:p-5 text-[#6D6D6D] text-center  lg:text-[24px] text-xs">
                          <div className="flex flex-col items-center gap-2 md:px-2 px-0">
                            <div> {truncateString(title ?? "", 10)}</div>
                            <div className="text-center">
                              {" "}
                              <a
                                href="https://support.google.com/business/contact/business_redressal_form"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#007bff",
                                  textDecoration: "underline",
                                }}>
                                <div className="py-4 md:py-0 pl-5">
                                  <Image
                                    alt="Flag"
                                    width={10}
                                    height={10}
                                    src={Flag}
                                    quality={100}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-[#6D6D6D] text-center border border-white lg:text-[24px] text-xs">
                          {averagePosition !== undefined
                            ? averagePosition?.toFixed(1)
                            : ""}
                        </TableCell>
                        <TableCell className="text-[#6D6D6D] text-center border border-white lg:text-[24px] font-normal text-xs">
                          {reviews}
                        </TableCell>
                        <TableCell className="text-[#6D6D6D] text-center border border-white lg:text-[24px] font-normal text-xs">
                          <div className="flex lg:hidden">
                            <Rating
                              name="read-only"
                              sx={{
                                fontSize: "10px",
                              }}
                              precision={0.5}
                              value={rating}
                              readOnly
                            />
                          </div>
                          <div className="text-center hidden lg:flex flex-col lg:w-24 mx-auto">
                            <DecimalStar rating={rating} />
                          </div>
                          <div className="md:pl-2 pt-1 lg:pt-2 pl-0">
                            {rating}{" "}
                          </div>
                        </TableCell>
                        <TableCell className=" text-[#6D6D6D] leading-3 lg:leading-[20px] text-center border border-white lg:text-[24px] font-normal text-xs whitespace-pre-wrap">
                          {type?.split(" ").join("\n")}
                        </TableCell>
                        <TableCell className="text-[#6D6D6D] text-xs lg:text-[24px] md:text-center border border-white text-start font-normal lg:leading-7 md:max-w-[20px]">
                          {(types ?? []).join(" ").split(" ").join("\n")}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        width={100}
        height={100}
        className="flex md:hidden w-full"
        alt="screen"
        src={Screen}
      /> */}
    </>
  );
};

export default GoogleMapComponent;
