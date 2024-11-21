import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { ToastAction } from "@/components/ui/toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import ReviewComponent from "./AdPreview";
import Link from "next/link";
import { getImageData } from "@/utils/getImageUrl";
import { Eye, PencilLine } from "lucide-react";
import { AxiosResponse } from "axios";

interface AdCreativeComponent {
  handleclick: () => void;
  handleprevious: () => void;
  adId: string;
}

interface AdCreativeResponse {
  id?: string;
  error?: string;
  message?: string;
}

export default function AdCreativeComponent({
  handleclick,
  handleprevious,
  adId,
}: AdCreativeComponent) {
  const [preview, setPreview] = useState("");
  const [review, setReview] = useState(false);

  const { data: session, status } = useSession();

  const formSchema = z.object({
    adname: z.string(),
    adcreative: z.string(),
    bodydescription: z.string(),
    status: z.string(),
    headline: z.string(),
    objecturl: z.string(),
    image: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adname: "",
      headline: "",
      adcreative: "",
      bodydescription: "",
      objecturl: "",
      status: "",
      image: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      ad_account_id: adId,
      name: values.adname,
      status: values.status,
    };

    axios
      .post<AdCreativeResponse>(
        `https://graph.facebook.com/v20.0/act_${
          payload?.ad_account_id
        }/adcreatives?status=${payload.status}&name=${
          payload.name
        }&access_token=${(session as any).accessToken}`
      )
      .then((response: AxiosResponse<AdCreativeResponse>) => {
        if (response?.data?.id) {
          console.log("Creative post");
        } else {
          const errorMessage =
            response.data.error ||
            response.data.message ||
            "An unknown error occurred";
          console.error("Failed to create adset:", response);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        const errorResponse = error.response;
        console.log("API Error:", errorResponse.data.error.message);
        if (errorResponse) {
          const errorMessage =
            errorResponse?.data?.error.error_user_title || "Invalid Paramter";
        }
      });
  }

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files, displayUrl } = getImageData(event);
    setPreview(displayUrl);
  };

  const formData = form.watch();

  return (
    <div className="flex justify-center w-full">
      <Card className="w-full max-w-2xl md:max-w-6xl bg-[#F4F4F4] rounded-lg">
        <CardHeader className="bg-[#631363]">
          <CardTitle className="text-[#F4F4F4]">Ad Creative</CardTitle>
        </CardHeader>
        <CardContent className="grid pt-2 gap-6">
          <div className="flex justify-end gap-2">
            <div
              onClick={() => setReview(false)}
              className={`text-xs flex rounded-md cursor-pointer ${
                !review ? "bg-white" : ""
              } p-1 gap-1 items-center border border-[#631363]`}>
              <PencilLine color="#631363" />
              Edit
            </div>
            <div
              onClick={() => setReview(true)}
              className={`text-xs flex rounded-md cursor-pointer ${
                review ? "bg-white" : ""
              } p-1 gap-1 items-center border border-[#631363]`}>
              <Eye color="#631363" />
              Review
            </div>
          </div>
          {review ? (
            <ReviewComponent data={formData} asset={preview} maxLength={50} />
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2">
                <FormField
                  control={form.control}
                  name="adname"
                  render={({ field }) => (
                    <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                      <FormLabel className="text-[#631363] font-medium">
                        {" "}
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Ad Creative Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="adcreative"
                  render={({ field }) => (
                    <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                      <FormLabel className="text-[#631363] font-medium">
                        {" "}
                        Primary Text
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="30% off on this sale" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="headline"
                  render={({ field }) => (
                    <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                      <FormLabel className="text-[#631363] font-medium">
                        {" "}
                        Headline
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Chat on Messenger" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bodydescription"
                  render={({ field }) => (
                    <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                      <FormLabel className="text-[#631363] font-medium">
                        {" "}
                        Body
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter a description or body text for the creative"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="objecturl"
                  render={({ field }) => (
                    <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                      <FormLabel className="text-[#631363] font-medium">
                        {" "}
                        Object Url
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="www.hubspark.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                      <FormLabel className="text-[#631363]">Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          <SelectItem
                            value="ACTIVE"
                            className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
                            Active
                          </SelectItem>
                          <SelectItem
                            value="PAUSED"
                            className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
                            Archived
                          </SelectItem>
                          <SelectItem
                            value="DELETED"
                            className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
                            Deleted
                          </SelectItem>
                          <SelectItem
                            value="ARCHIVED"
                            className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
                            Paused
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                {/* <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                  <FormLabel className="text-[#631363] font-medium">
                    {" "}
                    Image
                  </FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
                <div className="grid gap-2">
                  {" "}
                  <Label htmlFor="image">Image</Label>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <Input
                          id="image"
                          type="file"
                          onChange={handleImageChange}
                        />
                      </div>
                      <Button size="sm">Upload</Button>
                    </div>
                    <div className="grid gap-2 w-full md:max-w-96">
                      {preview && (
                        <Image
                          src={preview}
                          alt="Preview"
                          width={200}
                          height={100}
                          objectFit="cover"
                          className="aspect-[4/3] w-full rounded-md object-cover"
                        />
                      )}
                      <p className="text-sm text-muted-foreground">
                        Preview of the uploaded image
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          )}
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button
            className="bg-[#631363] text-[#F4F4F4] hover:bg-[#E0E0E0] hover:text-[#631363]"
            onClick={handleprevious}
            variant="outline">
            Previous
          </Button>
          <Link href="/payments">Publish Ad</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
