import React from 'react'
import '../product.css'

function Products() {
    return (
        <div className="specialize pb-4 p-4">
            <div className="heading font-taglineP lg:text-6xl text-5xl underline underline-offset-[20px] decoration-yellow-500 text-[#0a0342]">We specialize in</div>
            <h2 className=''>HYDRAULIC HOSE ASSEMBLIES</h2>
            <div className="line1"></div>
            <div className="info">
                <div className="left">
                    <ol type="1">
                        <li>Hose Assemblies with Permanent Type (CRIMP) Fitting</li>
                        <li>
                            Medium & high pressure hose assemblies are manufactured with imported & indigenous hoses
                        </li>
                        <li>
                            Hose assemblies can be supplied with BSPMETRIC, UNF threads & 3000/6000 PSI SAE lange connection
                        </li>
                        <li>
                            Hose & fittings supplied as per SAE, DIN-20022, DIN-20023 specifications
                        </li>
                        <li>
                            Applications in Mining, Earth Moving Machines, Special Machine, Plastic Machineries, Fertilizer plant, Steel plant, Cement plant, Atomic & thermal power plants, Ship Building & Defence Equipments etc.
                        </li>
                    </ol>
                </div>
                <div className="right">
                    <div className="img1"></div>
                    <div className="img2"></div>
                </div>
            </div>
            <h2>HYDRAULIC CYLINDERS</h2>
            <div className="line1"></div>
            <div className="info1">
                <div className="left">
                    <ol type="1" style={{ marginTop: '13%' }}>
                        <li>All Types of Cylinder Maintenance Work</li>
                    </ol>
                </div>
                <div className="right1">
                    <div className="img11"></div>
                </div>
            </div>
            <h2>HYDRAULIC ACCESSORIES</h2>
            <div className="line1"></div>
            <div className="info">
                <div className="left">
                    <ol type="1">
                        <li>Fittings supplied as per International Specification Din 2353</li>
                        <li>Fitting supplied in CS & SS (304,316 etc.)</li>
                        <li>
                            Fittings supplied for different pressure application: Series L for SPM, Machine tool ind, hydraulic return line & other low & medium pressure applications. Series S for applications like Ship building, Mining, Steel plants, Aviation, DG set & other high pressure lines.
                        </li>
                        <li>Flareless Bite Type Fittings (Perule Fittings)</li>
                        <li>Fittings supplied with weld nipple for high pressure application.</li>
                    </ol>
                </div>
                <div className="right">
                    <div className="img111"></div>
                    <div className="img222"></div>
                </div>
            </div>
        </div>

    )
}

export default Products