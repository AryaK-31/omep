import React from 'react'

function About() {
    return (
        <div className="lg:grid lg:grid-cols-2 h-1/2">
            <div className="order-2 lg:order-1 bg-img lg:bg-fixed bg-center bg-contain w-full lg:w-auto h-full">
                {/* Smaller image content */}
            </div>
            <div className="bg-gray-200">
                <h1 className="text-center lg:pl-[25rem] lg:pr-16 font-semibold lg:text-6xl text-5xl lg:p-12 underline underline-offset-[20px] decoration-yellow-500 text-blue-900 lg:tracking-wide p-4">ABOUT</h1>

                <p className="mt-4 lg:pl-[25rem] lg:pr-16 lg:text-lg p-4 lg:leading-8 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores ratione neque magnam assumenda ea placeat incidunt odio iure ducimus commodi officia suscipit, nisi autem aliquam! Voluptas nisi praesentium corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores ratione neque magnam assumenda ea placeat incidunt odio iure ducimus commodi officia suscipit, nisi autem aliquam! Voluptas nisi praesentium corrupti!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores ratione neque magnam assumenda ea placeat incidunt odio iure ducimus commodi officia suscipit, nisi autem aliquam! Voluptas nisi praesentium corrupti!
                </p>
            </div>
        </div>
    )
}

export default About