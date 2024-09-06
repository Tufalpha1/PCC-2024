import pcc from '../assets/img/PCC2024.png'
import airoverflow from '../assets/img/organizers/airoverflow.png'

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
const navigation = [
  { name: "About", href: "/#about" },
  { name: "Organizers & Patrons", href: "/#organizers" },
  { name: "Cash Prizes", href: "/#prize" },
  { name: "Categories", href: "/#categories" },
  { name: "Badge", href: "/#badge" },
  { name: "PCC Winners", href: "/#winners" },
];
 
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  return (
    <header className="bg-black text-white font-heading fixed top-0 w-full z-50">
      <nav
        className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex gap-8">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">PCC</span>
            <img
              className="h-12 w-auto"
              src={pcc}
              alt=""
            />
          </a>
          <a href="https://airoverflow.com" className="-m-1.5 p-1.5">
            <span className="sr-only">AirOverFlow</span>
            <img
              className="h-12 w-auto"
              src={airoverflow}
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs leading-6 tracking-wider hover:text-[#ff0000]"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">PCC</span>
              <img
                className="h-12 w-auto"
                src={pcc}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-12 cyber-h-white" />
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:text-[#ff0000] tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}