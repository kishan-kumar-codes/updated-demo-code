"use client";
import { Button } from "@/components/ui/button";
// import TargetKeyWord from "@/components/seo/TargetKeyword";
import Image from "next/image";
import Screen from "@/assets/images/hubspark/BottomScreen.png";
import MapStatic from "@/assets/images/hubspark/mapstatic.png";
import Link from "next/link";

import React, { useState } from "react";
import { gql, ApolloError } from "@apollo/client";
// import apolloClient from "@/lib/apolloClient";
// import { calculateGeoChanges } from "@/utils/geoCalculations";
// import GoogleMapComponent from "@/components/grid/googlemap/GoogleMap";
import GoogleMapComponent from "@/components/googlemap/GoogleMap";
import { calculateGeoChanges } from "@/utils/geoCalculations";
import { MapLoader } from "@/components/skeleton/MapLoader";
import { motion, AnimatePresence } from "framer-motion";

import { Input } from "@/components/ui/input";
import Chip from "@mui/material/Chip";
import { X } from "lucide-react";
import { useEffect } from "react";
import { dividerClasses } from "@mui/material";

interface Location {
  position: number;
  title: string;
  place_id: string;
  gps_coordinates: {
    latitude: number;
    longitude: number;
  };
  address: string;
  searchContexts: SearchContext[];
  reviews: number;
  rating: number;
  type: string;
  types: string[];
}

interface SearchContext {
  searchLatitude: number;
  searchLongitude: number;
  position: number;
  distance: number;
  direction: string;
  missing?: boolean;
  title: string;
}

interface Report {
  id: string;
  user: { id: string };
  date: string;
  keyword: string;
  locations: [Location];
}

interface UserReportsData {
  queryUser: {
    id: string;
    reports: Report[];
  }[];
}

interface UserReportsVariables {
  userIds: string[];
}

const ADD_LOCATION_MUTATION = gql`
  mutation AddLocation($input: [AddLocationInput!]!) {
    addLocation(input: $input) {
      location {
        id
        position
        title
        place_id
        gps_coordinates {
          latitude
          longitude
        }
        address
        searchContexts {
          direction
          distance
          missing
          position
          searchLatitude
          searchLongitude
          title
        }
        reviews
        rating
        type
        types
      }
    }
  }
`;

const ADD_REPORT_MUTATION = gql`
  mutation AddReport($input: [AddReportInput!]!) {
    addReport(input: $input) {
      report {
        id
        user {
          id
        }
        date
        keyword
        locations {
          id
          address
          gps_coordinates {
            latitude
            longitude
          }
          place_id
          position
          rating
          reviews
          searchContexts {
            direction
            distance
            missing
            position
            searchLatitude
            searchLongitude
            title
          }
          title
          type
          types
        }
      }
    }
  }
`;

const USER_REPORTS_QUERY = gql`
  query MyQuery($userIds: [ID!]!) {
    queryUser(filter: { id: $userIds }) {
      id
      reports {
        id
        date
        keyword
        locations {
          gps_coordinates {
            latitude
            longitude
          }
          address
          id
          place_id
          position
          rating
          reviews
          searchContexts {
            direction
            distance
            missing
            position
            searchLatitude
            searchLongitude
            title
          }
          title
          type
          types
        }
      }
    }
  }
`;
export default function Rankings() {
  const [isShowPerformance, setShowPerformance] = useState<boolean>(false);
  const [results, setResults] = useState<Location[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchKeywords, setSearchKeywords] = useState<string[]>([]);
  const [inputKeyword, setInputKeyword] = useState<string>("");
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [allReports, setAllReports] = useState<Report[]>([]);

  const fetchData = async (
    keyword: string,
    distance: number,
    direction: string
  ) => {
    const originalLatitude = 42.890803;
    const originalLongitude = -78.876239;
    const { deltaLat, deltaLon } = calculateGeoChanges(
      distance,
      originalLatitude
    );

    // Adjust the latitude and longitude based on the provided direction vector
    const directionParts = direction.split(",").map(Number); // Convert direction to x, y components
    let latitude = originalLatitude + deltaLat * directionParts[1];
    let longitude = originalLongitude + deltaLon * directionParts[0];

    console.log(
      `Adjusted coordinates for ${direction} - Latitude: ${latitude}, Longitude: ${longitude}`
    );
    const response = await fetch(
      `/api/serpapi?q=${encodeURIComponent(
        keyword
      )}&ll=@${latitude},${longitude},15.1z`
    );
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return (
      data.map((result: any) => ({
        ...result,
        searchContexts: [
          {
            searchLatitude: latitude,
            searchLongitude: longitude,
            position: result.position,
            distance: distance,
            direction: direction,
          },
        ],
      })) || []
    );
  };

  const adjustCoordinates = (
    latitude: number,
    longitude: number,
    deltaLat: number,
    deltaLon: number,
    direction: string
  ) => {
    const directionParts = direction.split(",").map(Number);
    const adjustedLat = latitude + deltaLat * directionParts[1];
    const adjustedLon = longitude + deltaLon * directionParts[0];
    return { adjustedLat, adjustedLon };
  };

  const performSearches = async () => {
    if (searchKeywords.length === 0) return; // Only perform searches if keywords are provided
    setHasSearched(true);
    setIsLoading(true);
    try {
      const allResults = [];

      for (const keyword of searchKeywords) {
        const directions = [
          { x: -2, y: -2 },
          { x: -1, y: -2 },
          { x: 0, y: -2 },
          { x: 1, y: -2 },
          { x: 2, y: -2 },
          //{ x: -2, y: -1 }, { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }, { x: 2, y: -1 },
          //{ x: -2, y: 0 },  { x: -1, y: 0 },  { x: 0, y: 0 },  { x: 1, y: 0 },  { x: 2, y: 0 },
          //{ x: -2, y: 1 },  { x: -1, y: 1 },  { x: 0, y: 1 },  { x: 1, y: 1 },  { x: 2, y: 1 },
          //{ x: -2, y: 2 },  { x: -1, y: 2 },  { x: 0, y: 2 },  { x: 1, y: 2 },  { x: 2, y: 2 }
        ];
        const distance = 1;

        const searchPromises = directions.map((direction) => {
          return fetchData(keyword, distance, `${direction.x},${direction.y}`);
        });

        const results = await Promise.all(searchPromises);
        const combinedResults = results.flat();

        const combinedSearchContextsMap = new Map();
        combinedResults.forEach((result) => {
          const key = `${result.place_id}-${result.distance}-${result.direction}`;
          if (!combinedSearchContextsMap.has(key)) {
            combinedSearchContextsMap.set(key, {
              ...result,
              searchContexts: [],
              keyword,
            });
          }
          const existingEntry = combinedSearchContextsMap.get(key);
          existingEntry.searchContexts.push(...result.searchContexts);
        });

        combinedSearchContextsMap.forEach((entry, _) => {
          directions.forEach((direction) => {
            const key = `${distance}-${direction.x},${direction.y}`;
            if (
              !entry.searchContexts.some(
                (context: SearchContext) =>
                  `${context.distance}-${context.direction}` === key
              )
            ) {
              const { deltaLat, deltaLon } = calculateGeoChanges(
                distance,
                42.890803
              );
              const { adjustedLat, adjustedLon } = adjustCoordinates(
                42.890803,
                -78.876239,
                deltaLat,
                deltaLon,
                `${direction.x},${direction.y}`
              );
              entry.searchContexts.push({
                searchLatitude: adjustedLat,
                searchLongitude: adjustedLon,
                position: 21, // Placeholder for actual position
                distance: distance,
                direction: `${direction.x},${direction.y}`,
                missing: true, // Indicating that this context was manually added
              });
            }
          });
        });

        allResults.push(Array.from(combinedSearchContextsMap.values()));
      }

      const date = new Date().toISOString();

      /*const mutateResponse = await fetch('/api/serpapi/mutate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ allResults, date }),
            });

            const mutateResult = await mutateResponse.json();
            console.log(mutateResult);*/

      setResults(allResults);
      console.log(allResults);

      const queryResponse = await fetch("/api/serpapi/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userIds: ["0xfffd8d729991588d"] }),
      });

      const reports = await queryResponse.json();
      console.log(reports);
      setAllReports(reports);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const addKeyword = () => {
    if (inputKeyword.trim() && searchKeywords.length < 5) {
      setSearchKeywords([...searchKeywords, inputKeyword.trim()]);
      setInputKeyword("");
    }
  };

  const removeKeyword = (index: number) => {
    setSearchKeywords(searchKeywords.filter((_, idx) => idx !== index));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputKeyword(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasCoffee = searchKeywords.includes("coffee");
    const hasDonuts = searchKeywords.includes("donuts");

    if (hasCoffee || hasDonuts) {
      performSearches().then();
      setShowPerformance(true);
    } else {
      console.log("Search must include both 'coffee' or 'donuts'.");
    }
  };

  return (
    <div className="bg-[#F4F4F4]">
      {!isShowPerformance && (
        <div>
          <div className="flex bg-[#F4F4F4]  justify-center">
            <div className="mb-6 bg-[#F4F4F4]  w-full ">
              <div className="flex flex-col w-full px-2">
                <div className="w-[60%] pt-2 pl-0 lg:pl-2 flex flex-col  gap-2">
                  <div className="text-[#6D6D6D] lg:hidden  tracking-wide text-xl md:text-2xl p-1 font-semibold">
                    Rankings
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:bg-[#E0E0E0] bg-[#F4F4F4] md:rounded-lg rounded-none lg:mx-12 lg:my-8 mx-0 my-0 flex md:flex-row-reverse flex-col items-center justify-center">
            <div className="w-full  flex justify-center">
              {" "}
              <div className="my-4 w-fit border-2 bg-white rounded-md">
                <Image
                  alt="map-image"
                  height={320}
                  width={404}
                  className="object-cover"
                  quality={100}
                  src={MapStatic}
                />
              </div>
            </div>
            <div className="w-full">
              <form onSubmit={handleSearchSubmit}>
                <div className="flex w-full relative justify-center">
                  <div className="absolute left-14 top-[13px]"></div>
                  <div className="flex flex-col w-full md:w-[60%] px-4 justify-center">
                    <div className="text-[#6D6D6D] pb-2 lg:pb-4 text-xs md:text-sm lg:text-[22px] font-bold">
                      Target Keyword{" "}
                      <span className="text-[#631363]">(click here)</span>
                    </div>{" "}
                    <div className="flex w-full items-center justify-center gap-2">
                      <Input
                        className="rounded-xl bg-[#FFFFFF] text-[#3D3D3D]  w-full border-0"
                        type="search"
                        value={inputKeyword}
                        onChange={handleSearchChange}
                        placeholder="Type keyword..."
                        maxLength={150}
                      />
                      <Button
                        type="button"
                        onClick={addKeyword}
                        disabled={searchKeywords.length >= 5}
                        variant="outline"
                        className="bg-[#40F440] text-[#3D3D3D] text-[10px] md:text-xs font-bold lg:text-[20px] rounded-xl w-26 h-10">
                        Add
                      </Button>
                    </div>
                    <div className="py-2 flex w-full gap-2 overflow-auto">
                      {searchKeywords.map((keyword, index) => (
                        <div
                          key={index}
                          className="bg-[#e0e0e0] text-[#3D3D3D]  md:bg-white"
                          style={{
                            display: "inline-block",
                            padding: "5px 10px",
                            marginLeft: index === 0 ? "0px" : "5px",
                            borderRadius: "10px",
                            position: "relative",
                          }}>
                          {keyword}
                          <button
                            type="button"
                            onClick={() => removeKeyword(index)}
                            style={{
                              marginLeft: "10px",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                              position: "absolute",
                              top: "0",
                              right: "2px",
                              fontSize: "12px",
                              //color: '#ff0000'
                            }}
                            aria-label="Remove keyword">
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex py-4 md:py-8 w-full justify-center px-2">
                      <Button
                        variant="outline"
                        type="submit"
                        className="bg-[#631363] font-bold w-40 p-4 lg:px-6 lg:w-fit lg:text-[32px] h-10 lg:h-fit rounded-xl text-white">
                        {" "}
                        Run Report
                      </Button>
                    </div>
                  </div>
                </div>
              </form>

              {/* <div className="flex py-4 md:py-8 w-full justify-center px-2">
            <Link href={"/performance"}>
              {" "}
              <Button
                variant="outline"
                className="bg-[#631363] w-40 h-10 rounded-xl text-white">
                {" "}
                Run Report
              </Button>
            </Link>
          </div> */}
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoading(false)}
              className="fixed inset-0 bg-black bg-opacity-50  z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow-xl py-16 md:py-28 px-4 w-full max-w-md md:max-w-lg lg:max-w-3xl">
                <div className="flex justify-center space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-3 bg-[#631363] rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        transition: {
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        },
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {!isLoading && hasSearched && (
        <GoogleMapComponent
          keywords={searchKeywords}
          locations={results}
          reports={allReports}
        />
      )}
    </div>
  );
}
