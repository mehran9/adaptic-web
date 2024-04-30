"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserSubscriptionPlan } from "@/types";

import { pricingData } from "@/config/subscriptions";
import { cn } from "@/lib/utils";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { Button, buttonVariants } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BillingFormButton } from "@/components/forms/billing-form-button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";

import { SubscriptionPlan } from "../types/index";

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}

export function PricingCards({ userId, subscriptionPlan }: PricingCardsProps) {
  useEffect(() => {
    const cardToCenter = document.querySelector(".card-to-center");
    if (cardToCenter) {
      cardToCenter.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);

  const isYearlyDefault =
    !subscriptionPlan?.stripeCustomerId || subscriptionPlan.interval === "year"
      ? true
      : false;
  const [isYearly, setIsYearly] = useState<boolean>(!!isYearlyDefault);
  const signInModal = useSigninModal();

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const PricingCard = ({ offer }: { offer: SubscriptionPlan }) => {
    return (
      <div
        className={cn(
          "relative flex min-w-[340px] max-w-[90hw] flex-col overflow-hidden rounded-3xl border shadow-sm",
          offer.title.toLocaleLowerCase() === "startup team"
            ? "card-to-center border-brand-500 -m-0.5 border-2"
            : "",
        )}
        key={offer.title}
      >
        <div className="min-h-[150px] items-start space-y-4 bg-muted/50 p-6">
          <div className="space-y-2">
            <p className="flex font-urban text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {offer.title}
            </p>

            <p className="text-brand-700 text-left text-sm font-medium">
              {offer.description}
            </p>
          </div>

          <div className="flex flex-row">
            <div className="flex items-end">
              <div className="flex text-left text-3xl font-semibold leading-6">
                {isYearly && offer.prices.monthly > 0 ? (
                  <>
                    <span className="mr-2 text-muted-foreground/80 line-through">
                      ${offer.prices.monthly}
                    </span>
                    <span>${(offer.prices.yearly / 12).toFixed(2)}</span>
                  </>
                ) : (
                  `$${offer.prices.monthly}`
                )}
              </div>
              <div className="-mb-1 ml-2 text-left text-sm font-medium text-muted-foreground">
                <div>/month</div>
              </div>
            </div>
          </div>
          {offer.prices.monthly > 0 ? (
            <div className="text-left text-sm text-muted-foreground">
              {isYearly
                ? `$${offer.prices.yearly} will be charged when annual`
                : "when charged monthly"}
            </div>
          ) : null}
        </div>

        <div className="flex h-full flex-col justify-between gap-16 p-6">
          <ul className="space-y-2 text-left text-sm font-medium leading-normal">
            {offer.benefits.map((feature) => (
              <li className="flex items-start gap-x-3" key={feature}>
                <Icons.check className="text-brand-600 size-5 shrink-0" />
                <p>{feature}</p>
              </li>
            ))}

            {offer.limitations.length > 0 &&
              offer.limitations.map((feature) => (
                <li
                  className="flex items-start text-muted-foreground"
                  key={feature}
                >
                  <Icons.close className="mr-3 size-5 shrink-0" />
                  <p>{feature}</p>
                </li>
              ))}
          </ul>

          {userId && subscriptionPlan ? (
            offer.title === "Starter" ? (
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "w-full",
                )}
              >
                Go to dashboard
              </Link>
            ) : (
              <BillingFormButton
                year={isYearly}
                offer={offer}
                subscriptionPlan={subscriptionPlan}
              />
            )
          ) : (
            <Button
              variant={
                offer.title.toLocaleLowerCase() === "startup team"
                  ? "default"
                  : "outline"
              }
              onClick={signInModal.onOpen}
            >
              Sign in to subscribe
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="container flex flex-col items-center text-center">
      <HeaderSection
        label="Pricing"
        title="Start building the new internet today, with Collabur."
      />

      <div className="mb-4 mt-10 flex items-center gap-5">
        <ToggleGroup
          type="single"
          size="sm"
          defaultValue={isYearly ? "yearly" : "monthly"}
          onValueChange={toggleBilling}
          aria-label="toggle-year"
          className="h-9 overflow-hidden rounded-full border bg-background p-1 *:h-7 *:text-muted-foreground"
        >
          <ToggleGroupItem
            value="yearly"
            className="data-[state=on]:!bg-brand-700 rounded-full px-5 data-[state=on]:!text-primary-foreground"
            aria-label="Toggle yearly billing"
          >
            Yearly (-20%)
          </ToggleGroupItem>
          <ToggleGroupItem
            value="monthly"
            className="data-[state=on]:!bg-brand-700 rounded-full px-5 data-[state=on]:!text-primary-foreground"
            aria-label="Toggle monthly billing"
          >
            Monthly
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="w-full overflow-x-auto bg-inherit md:mx-auto">
        <div className="flex gap-5 overflow-x-auto py-5 md:mx-auto">
          {pricingData.map((offer) => (
            <PricingCard offer={offer} key={offer.title} />
          ))}
        </div>
      </div>

      <p className="mt-3 text-balance text-center text-base text-muted-foreground">
        Email{" "}
        <a
          className="text-brand-700 font-medium hover:underline"
          href="mailto:support@saas-starter.com"
        >
          support@saas-starter.com
        </a>{" "}
        for to contact our support team.
        <br />
        <strong>
          You can test the subscriptions and won&apos;t be charged.
        </strong>
      </p>
    </section>
  );
}
