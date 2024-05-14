import React from 'react'
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar'

const Courses = () => {


    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        // More products...
    ]



    return (
        <div>
            <Sidebar />
            <section className="container mx-auto py-12 md:py-24 dark:bg-gray-900 ml-12 ">
                <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">Explore Our Courses</h2>
                        <p className="mt-4 max-w-2xl text-lg text-gray-400">
                            Browse through our wide selection of courses and find the perfect one for you.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-1 ml-56">
                        <div className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                            <div className="group relative rounded-lg border border-gray-800 bg-gray-950 shadow-sm transition-all duration-300 hover:border-gray-700 hover:shadow-md">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
                                    <img
                                        alt="Course Thumbnail"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="/placeholder.svg"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                                    <p className="mt-2 text-sm text-gray-400">
                                        Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
                                    </p>
                                    <button className="mt-4 inline-flex items-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                                        Select Course
                                    </button>
                                </div>
                            </div>
                            <div className="group relative rounded-lg border border-gray-800 bg-gray-950 shadow-sm transition-all duration-300 hover:border-gray-700 hover:shadow-md">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
                                    <img
                                        alt="Course Thumbnail"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="/placeholder.svg"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                                    <p className="mt-2 text-sm text-gray-400">
                                        Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
                                    </p>
                                    <button className="mt-4 inline-flex items-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                                        Select Course
                                    </button>
                                </div>
                            </div>
                            <div className="group relative rounded-lg border border-gray-800 bg-gray-950 shadow-sm transition-all duration-300 hover:border-gray-700 hover:shadow-md">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
                                    <img
                                        alt="Course Thumbnail"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="/placeholder.svg"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                                    <p className="mt-2 text-sm text-gray-400">
                                        Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
                                    </p>
                                    <button className="mt-4 inline-flex items-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                                        Select Course
                                    </button>
                                </div>
                            </div>
                            <div className="group relative rounded-lg border border-gray-800 bg-gray-950 shadow-sm transition-all duration-300 hover:border-gray-700 hover:shadow-md">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
                                    <img
                                        alt="Course Thumbnail"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="/placeholder.svg"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                                    <p className="mt-2 text-sm text-gray-400">
                                        Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
                                    </p>
                                    <button className="mt-4 inline-flex items-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                                        Select Course
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Courses