import { Prompt } from "next/font/google";
import Link from "next/link";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/shared/icons";

import { PromptInput } from "../chat/promptInput";
import { Button } from "../ui/button";

export async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/mickasmt/next-saas-stripe-starter",
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        {/* Want animations? Check here: https://github.com/mickasmt/next-saas-stripe-starter/blob/76eb9f2b70b29c7a734ff0e5b047796ed2dac28d/app/(marketing)/page.tsx */}
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "px-4",
          )}
          target="_blank"
        >
          <span className="mr-3">🎉</span> We are hiring and expanding fast!
        </Link>

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          Help your teams create at the speed of thought with{" "}
          <span className="text-gradient_brand-purple font-extrabold">
            {siteConfig.name}
          </span>
          <span className="ml-3">✨</span>
        </h1>

        <p
          className="max-w-5xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Unleash creativity & innovation across your organization with
          AI-powered design systems and no-code tooling, by empowering everyone
          to effortlessly craft and publish stunning, consistent web
          experiences.
        </p>

        <div
          className="mt-6 flex w-full flex-col items-center space-y-8 sm:mt-12"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <h3 className="text-gradient_brand-purple font-heading text-2xl font-black tracking-tight lg:text-3xl">
            Take Collabur for a spin!
          </h3>
          <Tabs defaultValue="generate-ds" className="w-full lg:w-[800px]">
            <TabsList>
              <TabsTrigger value="generate-ds">Generate a DS</TabsTrigger>
              <TabsTrigger value="generate-project">
                Generate a project
              </TabsTrigger>
            </TabsList>
            <TabsContent value="generate-ds">
              <PromptInput placeholder="Describe your company, industry, customers, and digital projects. Include brand tone, and style preferences..." />
            </TabsContent>
            <TabsContent value="generate-project">
              <PromptInput
                type="project"
                placeholder="Describe your website, layout, or component..."
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
