import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getImageData } from "@/utils/getImageUrl";
import { useState, ChangeEvent } from "react";
import Screen from "@/assets/images/hubspark/BottomScreen.png";
import User from "@/assets/images/hubspark/user-icon.svg";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const FormSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  phone: z.string().min(2),
  survey: z.string().min(2),
  avtar: z.string().min(2),
  emailreview: z.boolean(),
  emailalerts: z.boolean(),
});

export default function Myprofile() {
  const [preview, setPreview] = useState("");
  const [fileName, setFileName] = useState("No file chosen");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      survey: "",
      avtar: "",
      emailalerts: true,
      emailreview: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files, displayUrl } = getImageData(event);
    if (files && files.length > 0) {
      setFileName(files[0].name);
    } else {
      setFileName("No file chosen");
    }

    setPreview(displayUrl);
  };

  return (
    <>
      <div className="rounded-2xl mt-2 w-full bg-[#E0E0E0] mb-4">
        <div className="rounded-2xl text-white font-bold px-4 py-4 bg-[#631363]">
          Profile Setitngs
        </div>
        <div className="px-4 w-full py-4 ">
          <div className="rounded-lg bg-[#40F440] text-xs text-[#3D3D3D] w-fit font-bold px-4 py-2">
            Steven’s Rockstars Public Profile
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-1 py-2">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="space-y-0 py-1">
                    <FormLabel className="text-[#6D6D6D] font-semibold text-xs">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input className="rounded-xl bg-[#F4F4F4] " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-[#6D6D6D] font-semibold text-xs">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input className="rounded-xl bg-[#F4F4F4]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-[#6D6D6D] font-semibold text-xs">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input className="rounded-xl bg-[#F4F4F4]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="survey"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-[#6D6D6D] font-semibold text-xs">
                      Name for Surveys
                    </FormLabel>
                    <FormControl>
                      <Input className="rounded-xl bg-[#F4F4F4]" {...field} />
                    </FormControl>
                    <FormDescription className="text-xs pr-4 tracking-tighter text-[#6D6D6D]">
                      (optional) The name you&apos;d like to appear on your
                      customer survey requests.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="avtar"
                render={({ field }) => (
                  <>
                    <div className="mt-2">
                      {" "}
                      <div className="grid gap-2 w-full md:max-w-96">
                        {!preview && (
                          <div className="h-16 w-16 mt-2 flex justify-center items-end bg-[#8C8C8C]">
                            <Image
                              src={User}
                              alt="Preview"
                              width={44}
                              height={44}
                              className="w-12 pt-4 aspect-auto rounded-md object-contain"
                            />
                          </div>
                        )}
                        {preview && (
                          <Image
                            src={preview}
                            alt="Preview"
                            width={96}
                            height={80}
                            objectFit="cover"
                            className="h-20 w-24 rounded-md object-contain aspect-auto"
                          />
                        )}
                      </div>
                    </div>
                    <FormItem className="space-y-1">
                      <FormLabel className="text-[#6D6D6D] font-semibold text-xs">
                        Avatar(optional)
                      </FormLabel>
                      <FormControl>
                        <div className="bg-transparent rounded-xl py-2 w-full">
                          <Input
                            type="file"
                            className="hidden"
                            id="fileInput"
                            onChange={handleImageChange}
                            // {...field}
                          />
                          <label
                            htmlFor="fileInput"
                            className="px-3 py-2 bg-[#6D6D6D] text-white text-xs rounded-xl font-semibold cursor-pointer">
                            Choose File
                          </label>
                          <span className="text-[#6D6D6D] font-thin pl-4 text-xs max-w-14">
                            {fileName}
                          </span>
                        </div>
                      </FormControl>
                      <FormDescription className="pl-4 tracking-tighter font-semibold text-xs text-[#6D6D6D]">
                        We use Gravatar as the default avatar. You can upload
                        your own photo instead.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="emailreview"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md px-4 py-1">
                    <FormControl>
                      <Checkbox
                        className="border border-[#6D6D6D]"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-0 leading-none">
                      <FormLabel className="text-[#6D6D6D] text-xs tracking-tighter font-semibold ">
                        Send e-mail alerts when my customers interact with my
                        review requests.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emailalerts"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start space-x-3 space-y-0 rounded-md pb-2">
                    <div className="text-[#6D6D6D] pl-4 pb-2 tracking-tighter text-xs font-semibold">
                      E-mail alerts will be sent to your e-mail address.
                    </div>
                    <div className="flex pl-1">
                      <FormControl>
                        <Checkbox
                          className="border border-[#6D6D6D]  bg-[#40F440]"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-[#6D6D6D] tracking-tighter pl-3 text-xs text-nowrap font-semibold ">
                          Send periodic email reports about my review activity.
                        </FormLabel>
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <Button
                className="bg-[#40F440] mt-6 px-2 py-1 text-[#27272D] rounded-xl text-xs font-semibold"
                type="submit">
                Save Profile
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Image
        height={0}
        width={0}
        priority={true}
        style={{ width: "100%", height: "auto" }}
        className="flex md:hidden"
        alt="screen"
        src={Screen}
      />
    </>
  );
}
