import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getImageData } from "@/utils/getImageUrl";
import { useState, ChangeEvent } from "react";
import Screen from "@/assets/images/hubspark/BottomScreen.png";
import { Plus } from "lucide-react";
import { Ratings } from "@/components/CustomComponents/Ratings";

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
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  title: z.string().min(2),
  message: z.string().min(2),
  sitesmessages: z.string().min(2),
  displaysites: z.boolean(),
  reviewconf: z.string().min(2),
  optimize: z.boolean(),
  reviewrouting: z.boolean(),
  googleopt: z.boolean(),
  maxreview: z.boolean(),
  maxconve: z.boolean(),
  optfb: z.boolean(),
  counstmeardata: z.boolean(),
  url1: z.string().min(2),
  url2: z.string().min(2),
  url3: z.string().min(2),
  url4: z.string().min(2),
  url5: z.string().min(2),
});

export default function SurveySettings() {
  const [preview, setPreview] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      message: "",
      sitesmessages: "",
      displaysites: false,
      reviewconf: "",
      optimize: false,
      reviewrouting: false,
      googleopt: false,
      maxreview: false,
      optfb: false,
      maxconve: false,
      counstmeardata: false,
      url1: "",
      url2: "",
      url3: "",
      url4: "",
      url5: "",
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
    setPreview(displayUrl);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 py-2">
          <div className="rounded-2xl mt-2 w-full bg-[#E0E0E0] mb-4">
            <div className="rounded-2xl text-white font-bold px-4 py-4 bg-[#631363]">
              External Review Sites
            </div>
            <div className="px-2 w-full py-4 ">
              <div className="text-xs text-[#6D6D6D] w-fit font-semibold px-4 py-2">
                Review Sites will be presented to your customers when they are
                sent a customer feedback request via one of the HubSpark mobile
                applications, or the admin portal.
              </div>
              <Button
                className="bg-[#40F440] h-8 px-2 ml-4 mt-2 font-semibold cursor-pointer"
                type="submit">
                <Plus size={14} /> Add a Review Site
              </Button>
            </div>
          </div>
          <div className="rounded-2xl mt-2 w-full bg-[#E0E0E0] mb-4">
            <div className="rounded-2xl text-white font-bold px-4 py-4 bg-[#631363]">
              Review Form Configuration
            </div>
            <div className="px-4 w-full py-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-[#6D6D6D] font-semibold text-xs">
                      Review form title (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type something..."
                        className="rounded-xl bg-[#F4F4F4]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-[#6D6D6D] text-xs font-normal px-1">
                      If set, this title will be shown at the top of the review
                      form instead of the default title. See the default title
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-1 mt-1">
                    <FormLabel className="text-[#6D6D6D] font-semibold text-xs py-1">
                      Review form message
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type something..."
                        className="rounded-xl bg-[#F4F4F4]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-[#6D6D6D] text-xs font-normal px-1">
                      This message is displayed about the HubSpark form. See the
                      default message
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sitesmessages"
                render={({ field }) => (
                  <FormItem className="space-y-1 mt-1">
                    <FormLabel className="text-[#6D6D6D] font-semibold text-xs">
                      External review sites message
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type something..."
                        className="rounded-xl bg-[#F4F4F4]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-[#6D6D6D] text-xs font-normal px-1 py-1">
                      This message is displayed above the list of your external
                      review sites. See the default message
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="displaysites"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md pt-3 pb-1 px-1 ">
                    <FormControl>
                      <Checkbox
                        className="border border-[#6D6D6D]"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="grid gap-1.5 leading-none">
                      <label className="text-xs font-semibold text-[#6D6D6D] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Display External Sites First
                      </label>
                    </div>
                  </FormItem>
                )}
              />
              <p className="text-xs font-semibold text-[#6D6D6D] text-muted-foreground pb-4">
                Check this option to display links to your external review sites
                before our review form.
              </p>
              <FormField
                control={form.control}
                name="reviewconf"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-[#6D6D6D] font-semibold text-xs">
                      Review confirmation
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="rounded-2xl resize-none bg-[#F4F4F4]"
                        placeholder="Type something..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-[#6D6D6D] px-1">
                      This message is displayed when the end user completes a
                      review. See the default message
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="rounded-2xl mt-2 w-full bg-[#E0E0E0] mb-4">
            <div className="rounded-2xl text-white font-bold px-4 py-4 bg-[#631363]">
              Custom Review Confirmation Redirect (Advanced)
            </div>
            <div className="px-4 gap-2 flex w-full py-2 ">
              <Ratings rating={1} />
              <FormField
                control={form.control}
                name="url1"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <Input
                        placeholder="URL"
                        className="rounded-xl bg-[#F4F4F4]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="px-4 gap-2 flex w-full py-2 ">
              <Ratings rating={2} />
              <FormField
                control={form.control}
                name="url2"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <Input
                        placeholder="URL"
                        className="rounded-xl bg-[#F4F4F4]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="px-4 gap-2 flex w-full py-2 ">
              <Ratings rating={3} />
              <FormField
                control={form.control}
                name="url3"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <Input
                        placeholder="URL"
                        className="rounded-xl bg-[#F4F4F4] "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="px-4 gap-2 flex w-full py-2 ">
              <Ratings rating={4} />
              <FormField
                control={form.control}
                name="url4"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <Input
                        placeholder="URL"
                        className="rounded-xl bg-[#F4F4F4]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="px-4 gap-2 flex w-full py-2 ">
              <Ratings rating={5} />
              <FormField
                control={form.control}
                name="url5"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <Input
                        placeholder="URL"
                        className="rounded-xl bg-[#F4F4F4]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text-[#6D6D6D] text-xs tracking-tight px-4 py-3">
              Upon review completion, the user will be redirected to the
              specified URL associated with the overall rating he or she left.
            </div>
          </div>
          <div className="rounded-2xl mt-2 w-full bg-[#E0E0E0] mb-4">
            <div className="rounded-2xl text-white font-bold px-4 py-4 bg-[#631363]">
              Intelligent Review Routing
            </div>
            <div className="w-full py-2 ">
              <FormField
                control={form.control}
                name="optimize"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md px-3 py-2">
                    <FormControl>
                      <Checkbox
                        className="border border-[#6D6D6D] rounded-full  bg-[#40F440]"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-[#6D6D6D] text-xs tracking-tight font-semibold ">
                        Optimize for HubSpark Reviews (default)
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <p className="text-xs tracking-tight text-[#6D6D6D] px-3">
                Present potential reviewer with a choice of review location,
                always including native HubSpark reviews to yield an
                industry-leading 40% average response rate, as well as any
                third-party options you setup.
              </p>
              <FormField
                control={form.control}
                name="reviewrouting"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md px-3 pt-5">
                    <FormControl>
                      <Checkbox
                        className="border border-[#6D6D6D] rounded-full"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-[#6D6D6D] text-xs tracking-tight font-semibold ">
                        Apply Intelligent Review Routing to Optimize for Google
                        and/or Facebook Reviews
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <p className="text-xs text-[#6D6D6D] tracking-tight px-3 py-1">
                Apply our proprietary algorithm to decide when to bypass
                reviewer choice selectively and send them directly to provide a
                Google or Facebook review. You can optimize for Google alone
                (choose only the Google option below), Facebook alone (choose
                only Facebook below), or both Google and Facebook (choose both
                options below). We will apply your choices in order, and will
                always fall back to the normal HubSpark review process if the
                conditions for Intelligent Review Routing are not met.
              </p>
              <div className="px-6 py-1">
                <FormField
                  control={form.control}
                  name="googleopt"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start px-4 space-x-3 space-y-0 rounded-md">
                      <FormControl>
                        <Checkbox
                          className="border border-[#6D6D6D]"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1  leading-none">
                        <FormLabel className="text-[#6D6D6D] text-xs tracking-tight font-semibold ">
                          Include Optimization for Google
                        </FormLabel>
                        <p className="text-xs font-normal text-[#6D6D6D] tracking-tight">
                          Choose between two Google Review Optimization options
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="pl-9 py-1">
                <FormField
                  control={form.control}
                  name="maxreview"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start px-4 space-x-3 space-y-0 rounded-md p-4">
                      <FormControl>
                        <Checkbox
                          className="border border-[#6D6D6D] rounded-full"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1  leading-none">
                        <FormLabel className="text-[#6D6D6D] text-xs tracking-tight font-semibold ">
                          Maximize Google My Business Review Opportunities
                        </FormLabel>
                        <p className="text-xs font-normal text-[#6D6D6D] tracking-tight">
                          Optimized to gain the most Google My Business reviews
                          possible by including potential reviewers who may be
                          less likely to respond. This should yield the maximum
                          possible Google My Business reviews, but will also
                          have a greater effect on the total number of HubSpark
                          reviews you receive.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="px-9 py-1">
                <FormField
                  control={form.control}
                  name="maxconve"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start px-4 space-x-3 space-y-0 rounded-md p-4">
                      <FormControl>
                        <Checkbox
                          className="border border-[#6D6D6D] rounded-full"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1  leading-none">
                        <FormLabel className="text-[#6D6D6D] text-xs tracking-tight font-semibold ">
                          Maximize Google My Business Review Conversions
                        </FormLabel>
                        <p className="text-xs font-normal text-[#6D6D6D] tracking-tight">
                          Optimized for the highest possible conversion rate for
                          Google My Business reviews. This should yield a great
                          Google My Business review volume while minimizing the
                          impact on the total number of HubSpark reviews you
                          receive.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="optfb"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md pl-9 pr-4 pb-2">
                    <FormControl>
                      <Checkbox
                        className="border border-[#6D6D6D]"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-[#6D6D6D] tracking-tight font-semibold text-xs">
                        Include optimization for Facebook
                      </FormLabel>
                      <p className="text-xs text-[#6D6D6D] tracking-tight">
                        Optimized for the highest possible conversion rate for
                        Facebook reviews. This should yield a great Facebook
                        review volume while minimizing the impact on the total
                        number of HubSpark reviews you receive.
                      </p>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="rounded-2xl mt-4 w-full bg-[#E0E0E0] mb-4">
            <div className="rounded-2xl text-white font-bold px-4 py-4 bg-[#631363]">
              Local SMS Number For Review Requests
            </div>
            <div className="px-4 w-full py-2 ">
              <div className="text-[#6D6D6D] font-semibold text-xs py-2">
                Your Local SMS number is (555) 555-5555
              </div>
              <div className="text-[#6D6D6D] font-semibold text-xs py-2">
                When you send review requests via SMS, they will be sent from
                this number.
              </div>
              <div className="text-[#6D6D6D] font-normal tracking-tight text-xs py-4">
                Setting a disclaimer will require the customer to review and
                acknowledge the disclaimer before they can submit the review.
              </div>
              <FormField
                control={form.control}
                name="counstmeardata"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md pt-2">
                    <FormControl>
                      <Checkbox
                        className="border border-[#6D6D6D]"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-[#6D6D6D] tracking-tight font-semibold ">
                        Obscure Customer Data
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <p className="text-[#6D6D6D] tracking-tight font-normal text-xs pb-4 pt-1">
                Use this feature to replace customer names with initials
                anywhere a name is publicly displayed.
              </p>
              <Button
                className="bg-[#40F440] px-2 py-1 mb-2 text-[#27272D] rounded-xl text-xs font-semibold"
                type="submit">
                Save Changes
              </Button>
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
        </form>
      </Form>
    </>
  );
}
