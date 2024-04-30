import * as React from "react";
import Link from "next/link";

import classNames from "@/lib/utils/classNames";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Icons } from "../shared/icons";
import { Button } from "../ui/button";

export interface PromptInputProps {
  className?: string;
  type?: "ds" | "project";
  placeholder?: string;
}

function PromptInput({
  className,
  type,
  placeholder,
  ...props
}: PromptInputProps) {
  return (
    <div className="border-brand-100/50 bg-brand-100/10 mt-6 rounded-2xl border-2 p-3 dark:border-white/5 dark:bg-neutral-800/10 sm:p-4 md:p-6">
      {type === "project" ? (
        <div className="flex w-full items-start space-x-2">project</div>
      ) : null}

      <div
        className={classNames(
          className ? className : "",
          "border-brand-200/60 focus-within:border-brand-200 bg-brand-50 relative flex w-full flex-col space-y-3 rounded-2xl border-8 p-5 pb-4 shadow-xl dark:border-neutral-500/10 dark:bg-neutral-700/10",
        )}
        {...props}
      >
        <div className="min-h-28 sm:min-h-20 flex w-full items-start space-x-2">
          <textarea
            autoFocus
            rows={3}
            className="sm:text-md focus-visible:ring-none absolute inset-0 mt-1 w-full resize-none bg-transparent p-4 pr-16 text-neutral-900 placeholder:text-muted-foreground focus-visible:outline-none dark:text-white dark:placeholder:text-neutral-600 sm:pr-44"
            placeholder={placeholder}
          />
          <Button
            className="hover:shadow-brand-500/25 dark:hover:shadow-brand-800/10 absolute right-4 top-4 z-10 h-12 px-3.5 transition-all duration-100 hover:scale-105 hover:shadow-lg active:scale-[103%] sm:px-5"
            size="lg"
            type="submit"
          >
            {" "}
            <Icons.sparkles className="size-5 sm:mr-2" />
            <span className="hidden sm:flex">Generate</span>
          </Button>
        </div>
        <div className="flex flex-col items-start justify-between space-y-3 sm:flex-row sm:items-end sm:space-y-0">
          <div className="text-brand-600 z-10 flex space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    className="border-brand-200/70 bg-brand-50 hover:border-brand-300 hover:text-brand-800/80 hover:shadow-brand-500/25 dark:border-brand-200/10 dark:bg-brand-50/10 dark:hover:shadow-brand-800/10 p-2 hover:scale-105 hover:bg-white/80 hover:shadow-md active:scale-[103%] dark:hover:text-white"
                    size="sm"
                    variant="outline"
                  >
                    <Icons.media className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Add images (e.g. a mockup, workflow, user journey, or
                    sitemap, etc)
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    className="border-brand-200/70 bg-brand-50 hover:border-brand-300 hover:text-brand-800/80 hover:shadow-brand-500/25 dark:border-brand-200/10 dark:bg-brand-50/10 dark:hover:shadow-brand-800/10 p-2 hover:scale-105 hover:bg-white/80 hover:shadow-md active:scale-[103%] dark:hover:text-white"
                    size="sm"
                    variant="outline"
                  >
                    <Icons.post className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Add documents (e.g. pdf branding or style guides, sitemaps,
                    specs, etc)
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    className="border-brand-200/70 bg-brand-50 hover:border-brand-300 hover:text-brand-800/80 hover:shadow-brand-500/25 dark:border-brand-200/10 dark:bg-brand-50/10 dark:hover:shadow-brand-800/10 p-2 hover:scale-105 hover:bg-white/80 hover:shadow-md active:scale-[103%] dark:hover:text-white"
                    size="sm"
                    variant="outline"
                  >
                    <Icons.link className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Add website links (e.g. existing company website, Confluence
                    pages, etc)
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    className="border-brand-200/70 bg-brand-50 hover:border-brand-300 hover:text-brand-800/80 hover:shadow-brand-500/25 dark:border-brand-200/10 dark:bg-brand-50/10 dark:hover:shadow-brand-800/10 p-2 hover:scale-105 hover:bg-white/80 hover:shadow-md active:scale-[103%] dark:hover:text-white"
                    size="sm"
                    variant="outline"
                  >
                    <Icons.figma className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Directly reference a Figma project or design system (coming
                    soon)
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Link
            href="#"
            className="z-10 text-xs text-neutral-500 transition-all duration-100 hover:text-neutral-600 dark:hover:text-white/80 sm:text-sm"
          >
            ...or generate one using an{" "}
            <span className="underline">example prompt</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { PromptInput };
