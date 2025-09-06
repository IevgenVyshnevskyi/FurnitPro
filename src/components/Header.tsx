"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo.jpg";
import { SiVodafone } from "react-icons/si";
import kyivstarLogo from "./../../public/images/phones/kyivstar.jpeg"; // ✅ JPEG іконка

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import LangSwitcher from "./LangSwitcher";
import AppBreadcrumbs from "./AppBreadcrumbs";
//import ThemeSwitcher from "./ThemeSwitcher";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

// Оновлений список телефонів з іконками
const phoneNumbers = [
  {
    number: "+380963760986",
    operator: "Kyivstar",
    icon: (
      <Image
        src={kyivstarLogo}
        alt="Kyivstar"
        width={24}
        height={24}
        className="rounded-full object-cover"
      />
    ),
  },
  {
    number: "+380987781679",
    operator: "Kyivstar",
    icon: (
      <Image
        src={kyivstarLogo}
        alt="Kyivstar"
        width={24}
        height={24}
        className="rounded-full object-cover"
      />
    ),
  },
  {
    number: "+380957989094",
    operator: "Vodafone",
    icon: <SiVodafone className="w-6 h-6 text-red-600" />,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Header");

  return (
    <>
      <header
        className="bg-gray-900"
        //className="bg-gray-900 fixed top-0 left-0 w-full z-50 " /* style={{ background: "var(--foreground)", color: "var(--background)" }} */
      >
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" scroll={false} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className="transition hover:opacity-60"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Desktop menu */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white transition-colors hover:text-gray-400">
                {t("product")}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-500"
                />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-gray-400 group-hover:text-white"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-gray-700/50"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="size-5 flex-none text-gray-500"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Link
              href="/features"
              scroll={false}
              className="text-sm/6 font-semibold text-white transition-colors hover:text-gray-400"
            >
              {t("features")}
            </Link>
            <Link
              href="/marketplace"
              scroll={false}
              className="text-sm/6 font-semibold text-white transition-colors hover:text-gray-400"
            >
              {t("marketplace")}
            </Link>
            <Link
              href="/company"
              scroll={false}
              className="text-sm/6 font-semibold text-white transition-colors hover:text-gray-400"
            >
              {t("company")}
            </Link>

            {/* Desktop phone dropdown */}
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white transition-colors hover:text-gray-400">
                📞 {t("contacts") || "Contacts"}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-500"
                />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl bg-gray-800 shadow-lg ring-1 ring-gray-700 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-2">
                  {phoneNumbers.map((phone) => (
                    <Link
                      key={phone.number}
                      href={`tel:${phone.number}`}
                      className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
                    >
                      {phone.icon}
                      <span>{phone.number}</span>
                    </Link>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
          <LangSwitcher />
          {/* <ThemeSwitcher /> */}
        </nav>

        {/* Mobile menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <Link href="/" scroll={false} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={logo} alt="logo" width={50} height={50} />
              </Link>
              <LangSwitcher mobile />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                      {t("product")}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {/*  {phoneNumbers.map((phone) => (
                        <Link
                          key={phone.number}
                          href={`tel:${phone.number}`}
                          className="flex items-center gap-3 rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-white hover:bg-white/5"
                        >
                          {phone.icon}
                          <span>{phone.number}</span>
                        </Link>
                      ))} */}
                    </DisclosurePanel>
                  </Disclosure>

                  <Link
                    href="/features"
                    scroll={false}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    {t("features")}
                  </Link>
                  <Link
                    href="/marketplace"
                    scroll={false}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    {t("marketplace")}
                  </Link>
                  <Link
                    href="/company"
                    scroll={false}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    {t("company")}
                  </Link>
                </div>

                {/* Mobile phone dropdown */}
                <div className="py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">
                      📞 {t("contacts") || "Contacts"}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {phoneNumbers.map((phone) => (
                        <Link
                          key={phone.number}
                          href={`tel:${phone.number}`}
                          className="flex items-center gap-3 rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-white hover:bg-white/5"
                        >
                          {phone.icon}
                          <span>{phone.number}</span>
                        </Link>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <AppBreadcrumbs />
    </>
  );
}
