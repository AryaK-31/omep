import React from 'react';
import { GiPipes } from 'react-icons/gi'
import { GiValve } from 'react-icons/gi'
import { TbOvalVerticalFilled } from 'react-icons/tb'
import { MdOutlinePlumbing } from 'react-icons/md'
import { GiCooler } from 'react-icons/gi'
import { GiPressureCooker } from 'react-icons/gi'
import { CgOverflow } from 'react-icons/cg'
import { TiFlowSwitch } from 'react-icons/ti'
import { GiMultiDirections } from 'react-icons/gi'

const CardComponent = () => {
    const cardContent = [
        {
            cardTitle: 'Pumps',
            cardDescription: 'Card description goes here 1.Card description goes here 1.Card description goes here 1.',
            bgColor: '[#0a0342]',
            textColor: 'yellow-600',
            path: <GiPipes size={50} className="mb-4" />
        },
        {
            cardTitle: 'Check Valve',
            cardDescription: 'Card description goes here 1.Card description goes here 1.Card description goes here 1.',
            bgColor: 'yellow-600',
            textColor: '[#0a0342]',
            path: <GiValve size={50} className="mb-4" />
        },
        {
            cardTitle: 'Pressure Control Valve',
            cardDescription: 'Card description goes here 1.Card description goes here 1.Card description goes here 1.',
            bgColor: '[#0a0342]',
            textColor: 'yellow-600',
            path: <TbOvalVerticalFilled size={50} className="mb-4" />
        },
        {
            cardTitle: 'Manifolds',
            cardDescription: 'Card description goes here 1.Card description goes here 1.Card description goes here 1.',
            bgColor: 'yellow-600',
            textColor: '[#0a0342]',
            path: <TiFlowSwitch size={50} className="mb-4" />
        },
        {
            cardTitle: 'Pistons',
            cardDescription: 'Card description goes here 1.Card description goes here 1.Card description goes here 1.',
            bgColor: '[#0a0342]',
            textColor: 'yellow-600',
            path: <MdOutlinePlumbing size={50} className="mb-4" />
        },
        {
            cardTitle: 'Direction Control Valve',
            cardDescription: 'Card description goes here 1.Card description goes here 1.Card description goes here 1.',
            bgColor: 'yellow-600',
            textColor: '[#0a0342]',
            path: <GiMultiDirections size={50} className="mb-4" />
        },
        {
            cardTitle: 'Oil Cooler',
            cardDescription: 'Card description goes here 1.Card description goes here 1.Card description goes here 1.',
            bgColor: '[#0a0342]',
            textColor: 'yellow-600',
            path: <GiCooler size={50} className="mb-4" />
        },
        {
            cardTitle: 'Pressure Switch',
            cardDescription: 'Card description goes here 1.Card description goes here 1.Card description goes here 1.',
            bgColor: 'yellow-600',
            textColor: '[#0a0342]',
            path: <GiPressureCooker size={50} className="mb-4" />
        },
        {
            cardTitle: 'Flow Control Valve',
            cardDescription: 'Card description goes here 1.Card description goes here 1.Card description goes here 1.',
            bgColor: '[#0a0342]',
            textColor: 'yellow-600',
            path: <CgOverflow size={50} className="mb-4" />
        },
    ];

    return (
        <div className='bg-gray-200 p-4'>
            <h1 className='heading text-center font-taglineP lg:text-6xl text-xl max-w-6xl text-[#0a0342] underline underline-offset-[20px] decoration-yellow-500'>OTHERS</h1>
            <div className="p-4 pt-12 lg:p-14">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        cardContent.map((card, index) => {
                            return (
                                <div className="flex justify-center items-center" key={index}>
                                    <div className={`w-60 lg:h-46 h-full text-center rounded-lg shadow-lg bg-${card.bgColor} text-${card.textColor}`}>
                                        <div className="flex flex-col justify-center items-center h-full p-4">
                                            {card.path}
                                            <h2 className="text-xl font-semibold">{card.cardTitle}</h2>
                                            <p className="hidden lg:block mt-2">{card.cardDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
