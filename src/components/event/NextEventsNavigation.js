import React from 'react';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';

const NextEventsNavigation = ({ additionalClass, prevText, nextText, pageContext }) => (
    <nav className={['max-w-7xl mx-auto grid grid-cols-2 '
    + 'lg:grid-cols-3 xl:grid-cols-4 gap-4', ...additionalClass].join(' ')}
    >
        <div className="col-start-1 col-end-2 bg-white border border-gray">
            {pageContext.previous && (
                <a
                    href={`/${pageContext.previous.slug}`}
                    className="flex items-center justify-center text-sm md:text-lg font-medium px-2 md:px-5 py-3 w-full"
                >
                    <ArrowNarrowLeftIcon className="mr-2 h-5 md:h-7 w-5 md:w-7" aria-hidden="true" />
                    {prevText}
                </a>
            )}
        </div>
        <div className="lg:col-start-3 xl:col-start-4 bg-white border border-gray">
            {pageContext.next && (
                <a
                    href={`/${pageContext.next.slug}`}
                    className="flex items-center justify-center text-sm md:text-lg font-medium px-2 md:px-5 py-3 w-full"
                >
                    {nextText}
                    <ArrowNarrowRightIcon className="ml-2 h-5 md:h-7 w-5 md:w-7" aria-hidden="true" />
                </a>
            )}
        </div>
    </nav>
);

export default NextEventsNavigation;
