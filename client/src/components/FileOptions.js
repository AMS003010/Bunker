import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
//import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FileOptions() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grip-vertical text-white">
                <circle cx="9" cy="12" r="1"/>
                <circle cx="9" cy="5" r="1"/>
                <circle cx="9" cy="19" r="1"/>
            </svg>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute -right-14 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-[#1c1d1d] shadow-lg ring-1 ring-gray-200 ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            {({ focus }) => (
              <a
                href="frnjkfjr"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-400', 'block px-4 py-2 text-sm')}
              >
                Rename
              </a>
            )}
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            {({ focus }) => (
              <a
                href="frnjkfjr"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-400', 'block px-4 py-2 text-sm')}
              >
                Archive
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="frnjkfjr"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-400', 'block px-4 py-2 text-sm')}
              >
                Move
              </a>
            )}
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            {({ focus }) => (
              <a
                href="frnjkfjr"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-400', 'block px-4 py-2 text-sm')}
              >
                Share
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="frnjkfjr"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-400', 'block px-4 py-2 text-sm')}
              >
                Add to favorites
              </a>
            )}
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            {({ focus }) => (
              <a
                href="frnjkfjr"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-400', 'block px-4 py-2 text-sm')}
              >
                Delete
              </a>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
