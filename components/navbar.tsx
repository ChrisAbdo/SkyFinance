'use client';

import { Fragment, useState, useRef, useEffect } from 'react';
import { Popover, Combobox, Transition, Dialog } from '@headlessui/react';
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MoonIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  SunIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  CodeBracketIcon,
  DocumentIcon,
  ExclamationCircleIcon,
  LinkIcon,
  PencilSquareIcon,
  PhotoIcon,
  TableCellsIcon,
  VideoCameraIcon,
  ViewColumnsIcon,
  Bars4Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';

const items = [
  {
    id: 1,
    name: 'Swap',
    description: 'Swap your tokens with the best rates.',
    url: '#',
    color: 'bg-indigo-500',
    icon: PencilSquareIcon,
  },
  // More items...
  {
    id: 2,
    name: 'Stake',
    description: 'Stake your tokens to earn rewards.',
    url: '#',
    color: 'bg-indigo-500',
    icon: PencilSquareIcon,
  },
  {
    id: 3,
    name: 'Buy',
    description: 'Buy tokens at the best rates and no extra fees.',
    url: '#',
    color: 'bg-indigo-500',
    icon: PencilSquareIcon,
  },
  {
    id: 4,
    name: 'Sell',
    description: 'Sell tokens at the best rates and no extra fees.',
    url: '#',
    color: 'bg-indigo-500',
    icon: PencilSquareIcon,
  },
  {
    id: 5,
    name: 'Lend',
    description: 'Lend your tokens to earn interest.',
    url: '#',
    color: 'bg-indigo-500',
    icon: PencilSquareIcon,
  },
];
const solutions = [
  {
    name: 'Swap',
    description: 'Swap your tokens with the best rates.',
    href: '/swap',
    icon: ChartBarIcon,
  },
  {
    name: 'Receive',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/receive',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: BuildingOfficeIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkSquareIcon },
  { name: 'Webinars', href: '#', icon: ComputerDesktopIcon },
];
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [query, setQuery] = useState('');

  const filteredItems =
    query === ''
      ? items
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  // use effect where if control and k is pressed, open the command bar
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey && event.key === 'k') {
        setCommandOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Popover className=" bg-[#111] sticky top-0 z-50">
      <div
        className="pointer-events-none absolute inset-0 z-10 shadow"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <div>
            <Link href="/" className="flex">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#333] p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-white' : 'text-[#999]',
                        'group inline-flex items-center rounded-md  text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-2'
                      )}
                    >
                      <span>Features</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-white' : 'text-[#999]',
                          'ml-2 h-5 w-5 group-hover:text-white'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-[#333] shadow-lg md:block">
                        <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-[#444]"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                    <item.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-base font-medium text-white">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-white">
                                      {item.description}
                                    </p>
                                  </div>
                                  <p className="mt-2 text-sm font-medium text-[#999] lg:mt-4">
                                    Learn more
                                    <span aria-hidden="true"> &rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-[#444]">
                          <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-white hover:bg-[#555]"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="#"
                className="text-base font-medium text-[#999] hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base font-medium text-[#999] hover:text-white"
              >
                Docs
              </a>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-white' : 'text-[#999]',
                        'group inline-flex items-center rounded-md text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-white' : 'text-[#999]',
                          'ml-2 h-5 w-5 group-hover:text-white'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 bg-[#333]" />
                          <div className="w-1/2 bg-[#333]" />
                        </div>
                        <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                          <nav className="grid gap-y-10 bg-[#333] px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                            <div>
                              <h3 className="text-base font-medium text-white">
                                Company
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {company.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-white hover:bg-[#444]"
                                    >
                                      <item.icon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-4">{item.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-base font-medium text-white">
                                Resources
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {resources.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-white hover:bg-[#444]"
                                    >
                                      <item.icon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-4">{item.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                          <div className="bg-[#333] px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-base font-medium text-white">
                                From the blog
                              </h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <a
                                      href={post.href}
                                      className="-m-3 flex rounded-lg p-3 hover:bg-[#444]"
                                    >
                                      <div className="hidden flex-shrink-0 sm:block">
                                        <img
                                          className="h-20 w-32 rounded-md object-cover"
                                          src={post.imageUrl}
                                          alt=""
                                        />
                                      </div>
                                      <div className="w-0 flex-1 sm:ml-8">
                                        <h4 className="truncate text-base font-medium text-white">
                                          {post.name}
                                        </h4>
                                        <p className="mt-1 text-sm text-white">
                                          {post.preview}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <a
                                href="#"
                                className="text-white hover:text-white/80"
                              >
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              {/* <button
                onClick={() => setCommandOpen(true)}
                className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Connect Wallet
              </button> */}
              <button
                type="button"
                onClick={() => setCommandOpen(true)}
                className="inline-flex items-center rounded-md border border-transparent bg-[#444] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#444]/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Search | Ctrl K
                <MagnifyingGlassIcon
                  className="ml-3 -mr-1 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
              {/* <Transition.Root
                show={commandOpen}
                as={Fragment}
                afterLeave={() => setQuery('')}
                appear
              >
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={setCommandOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                        <Combobox
                          // @ts-ignore
                          onChange={(item) => (window.location = item.url)}
                        >
                          <div className="relative">
                            <MagnifyingGlassIcon
                              className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <Combobox.Input
                              className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                              placeholder="Search..."
                              onChange={(event) => setQuery(event.target.value)}
                            />
                          </div>

                          {filteredItems.length > 0 && (
                            <Combobox.Options
                              static
                              className="max-h-96 scroll-py-3 overflow-y-auto p-3"
                            >
                              {filteredItems.map((item) => (
                                <Combobox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
                                    classNames(
                                      'flex cursor-default select-none rounded-xl p-3',
                                      active && 'bg-gray-100'
                                    )
                                  }
                                >
                                  {({ active }) => (
                                    <>
                                      <div
                                        className={classNames(
                                          'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                                          item.color
                                        )}
                                      >
                                        <item.icon
                                          className="h-6 w-6 text-white"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="ml-4 flex-auto">
                                        <p
                                          className={classNames(
                                            'text-sm font-medium',
                                            active
                                              ? 'text-gray-900'
                                              : 'text-gray-700'
                                          )}
                                        >
                                          {item.name}
                                        </p>
                                        <p
                                          className={classNames(
                                            'text-sm',
                                            active
                                              ? 'text-gray-700'
                                              : 'text-gray-500'
                                          )}
                                        >
                                          {item.description}
                                        </p>
                                      </div>
                                    </>
                                  )}
                                </Combobox.Option>
                              ))}
                            </Combobox.Options>
                          )}

                          {query !== '' && filteredItems.length === 0 && (
                            <div className="py-14 px-6 text-center text-sm sm:px-14">
                              <ExclamationCircleIcon
                                type="outline"
                                name="exclamation-circle"
                                className="mx-auto h-6 w-6 text-gray-400"
                              />
                              <p className="mt-4 font-semibold text-gray-900">
                                No results found
                              </p>
                              <p className="mt-2 text-gray-500">
                                No components found for this search term. Please
                                try again.
                              </p>
                            </div>
                          )}
                        </Combobox>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition.Root> */}
              <Transition.Root
                show={commandOpen}
                as={Fragment}
                afterLeave={() => setQuery('')}
                appear
              >
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={setCommandOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                        <Combobox
                          // @ts-ignore
                          onChange={(item) => (window.location = item.url)}
                        >
                          <div className="relative">
                            <MagnifyingGlassIcon
                              className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <Combobox.Input
                              className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                              placeholder="Search..."
                              onChange={(event) => setQuery(event.target.value)}
                            />
                          </div>

                          {filteredItems.length > 0 && (
                            <Combobox.Options
                              static
                              className="max-h-96 scroll-py-3 overflow-y-auto p-3"
                            >
                              {filteredItems.map((item) => (
                                <Combobox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
                                    classNames(
                                      'flex cursor-default select-none rounded-xl p-3',
                                      active && 'bg-gray-100'
                                    )
                                  }
                                >
                                  {({ active }) => (
                                    <>
                                      <div
                                        className={classNames(
                                          'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                                          item.color
                                        )}
                                      >
                                        <item.icon
                                          className="h-6 w-6 text-white"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="ml-4 flex-auto">
                                        <p
                                          className={classNames(
                                            'text-sm font-medium',
                                            active
                                              ? 'text-gray-900'
                                              : 'text-gray-700'
                                          )}
                                        >
                                          {item.name}
                                        </p>
                                        <p
                                          className={classNames(
                                            'text-sm',
                                            active
                                              ? 'text-gray-700'
                                              : 'text-gray-500'
                                          )}
                                        >
                                          {item.description}
                                        </p>
                                      </div>
                                    </>
                                  )}
                                </Combobox.Option>
                              ))}
                            </Combobox.Options>
                          )}

                          {query !== '' && filteredItems.length === 0 && (
                            <div className="py-14 px-6 text-center text-sm sm:px-14">
                              <ExclamationCircleIcon
                                type="outline"
                                name="exclamation-circle"
                                className="mx-auto h-6 w-6 text-gray-400"
                              />
                              <p className="mt-4 font-semibold text-gray-900">
                                No results found
                              </p>
                              <p className="mt-2 text-gray-500">
                                No components found for this search term. Please
                                try again.
                              </p>
                            </div>
                          )}
                        </Combobox>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition.Root>

              <button
                onClick={() => setOpen(true)}
                className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-[#444] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#444]/80"
              >
                Connect Wallet
              </button>
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  initialFocus={cancelButtonRef}
                  onClose={setOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#333] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                          <div className="bg-[#333] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <ExclamationTriangleIcon
                                  className="h-6 w-6 text-red-600"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <Dialog.Title
                                  as="h3"
                                  className="text-lg font-medium leading-6 text-white"
                                >
                                  Connect Your Wallet to Continue
                                </Dialog.Title>
                                <div className="mt-2">
                                  <p className="text-sm text-gray-500">
                                    Are you sure you want to deactivate your
                                    account? All of your data will be
                                    permanently removed. This action cannot be
                                    undone.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#333] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => setOpen(false)}
                              ref={cancelButtonRef}
                            >
                              Close
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#333] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#333] p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-white">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View all products
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-white"
                >
                  Contact Sales
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Connect Wallet
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
