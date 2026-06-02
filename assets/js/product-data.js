// Product collections and data for Astraslide
const productsData = {
    collections: [
        {
            id: 'all',
            name: 'All Products',
            icon: '🏊',
            description: 'Everything you need for a world-class pool, in one place.'
        },
        {
            id: 'fittings',
            name: 'Pool Fittings',
            icon: '🔧',
            description: 'Precision-engineered pool fittings built from UV-resistant, corrosion-proof materials.'
        },
        {
            id: 'pumps-filters',
            name: 'Pumps & Filtration',
            icon: '⚙️',
            description: 'High-performance pool pumps and advanced filtration systems for crystal-clear, perfectly circulated water.'
        },
        {
            id: 'cleaning',
            name: 'Cleaning Equipment',
            icon: '🧹',
            description: 'Everything you need to keep your pool spotless!!'
        },
        {
            id: 'safety',
            name: 'Safety Equipment',
            icon: '🦺',
            description: 'Everything you need to keep your pool area safe and secure.'
        },
        {
            id: 'lighting',
            name: 'Lighting & Water Features',
            icon: '💡',
            description: 'Shed more light alongside our stunning stainless steel and acrylic waterfalls.'
        },
        {
            id: 'chemicals',
            name: 'Chemical & Water Treatment',
            icon: '⚗️',
            description: 'Compatible with chlorine, bromine, and saltwater systems.'
        },
        {
            id: 'heating',
            name: 'Pool Heating',
            icon: '🌡️',
            description: 'Models rated for residential, hotel, and spa installations.'
        },
    ],

    products: [

        // ─── COLLECTION 1: POOL FITTINGS ───────────────────────────────────────────

        {
            id: "handrail",
            title: "Handrail & Brackets",
            description: `
                <div>
                    <p>Heavy-duty stainless steel pool handrail designed to provide safe, confident entry and exit from the pool. The handrail resists corrosion from pool chemicals, saltwater, and prolonged UV exposure.</p>
                    
                    <p>Available in:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">2m (Compact / Plunge Pool)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">3m (Standard Residential)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">3.5m (Commercial / Deep Pool)</div>
                    </div>
                    <p>Finish: Mirror-polished Stainless Steel 304</p>
                    <p>Features:</p>
                    <ul>
                        <li>Grade 304 stainless steel — fully resistant to pool chemicals, saltwater, and UV</li>
                        <li>Deck-anchor bracket system for solid, load-bearing installation into concrete coping</li>
                        <li>Smooth, rounded rail profile ensures comfortable, splinter-free grip</li>
                    </ul>
                </div>
            `,
            category: "fittings",
            rating: 4.7,
            image: "https://astra-slide.vercel.app/assets/products/PEHARAS.jpg",
            images: [
                "https://astra-slide.vercel.app/assets/products/PEHARAS.jpg",
                "https://astra-slide.vercel.app/assets/products/SPSGS.jpg",
                "https://astra-slide.vercel.app/assets/products/PEHARGS.jpg",
                "https://astra-slide.vercel.app/assets/products/PERHAPS.jpg",
                "https://astra-slide.vercel.app/assets/products/PEHARNS.jpg",
                "https://astra-slide.vercel.app/assets/products/PEHARVS.jpg",
            ],
            features: [
                "Grade 304 stainless steel",
                "Deck-anchor bracket system",
                "3 length options: 2m, 3m, 3.5m",
                "Mirror-polished finish"
            ],
        },

        {
            id: "ladder",
            title: "Pool Ladder",
            description: `
                <div>
                    <p>A robust, deck-mounted stainless steel pool ladder designed for safe, comfortable entry and exit from the pool at any water depth. It anchors firmly into pool deck anchors and supports the weight demands of both residential and commercial use. Its clean, polished profile integrates seamlessly with any pool aesthetic.</p>
                    <p>Available configurations:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">2-Step (Shallow / Plunge Pool)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">3-Step (Standard Residential)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">4-Step (Deep Pool / Commercial)</div>
                    </div>
                    <p>Finish: Mirror-polished Stainless Steel 304</p>
                    <p>Features:</p>
                    <ul>
                        <li>Slip-resistant step treads provide secure footing when wet</li>
                        <li>Load-bearing capacity suitable for both children and adults in commercial environments</li>
                        <li>Compatible with standard pool deck anchor flanges for easy removal and reinstallation</li>
                    </ul>
                </div>
            `,
            category: "fittings",
            rating: 4.7,
            image: "https://astra-slide.vercel.app/assets/products/SPLBHK.jpg",
            images: [
                "https://astra-slide.vercel.app/assets/products/SPLBHK.jpg",
                "https://astra-slide.vercel.app/assets/products/SPLBHLS.jpg",
                "https://astra-slide.vercel.app/assets/products/SPLMUS.jpg",
                "https://astra-slide.vercel.app/assets/products/SPLOFS.jpg",
                "https://astra-slide.vercel.app/assets/products/SPLSFS.jpg",
                "https://astra-slide.vercel.app/assets/products/SPLSlS.jpg",
            ],
            features: [
                "Grade 304 stainless steel",
                "Slip-resistant step treads",
                "Removable deck-anchor base",
                "2, 3 and 4-step configurations"
            ],
        },

        {
            id: 'floor-drain',
            title: 'Floor Drain',
            description: `
        <div>
            <p>Heavy-duty anti-vortex pool drain designed for efficient bottom-water evacuation. Constructed from high-impact UV-resistant ABS plastic with a corrosion-resistant finish — built to perform safely beneath the water line for years.</p>
            <p>Available in:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">150mm (Residential)</div>
                <div class="city-pill" style="background-color: #EFF6FF;">200mm (Commercial)</div>
            </div>
            
            <p>Finishes: White</p>
            
            <p>Features:</p>
            <ul>
                <li>Anti-vortex design compliant with residential and commercial safety standards</li>
                <li>Flush-mount installation into concrete or fibreglass pool floors</li>
                <li>Compatible with both skimmer and overflow pool systems</li>
            </ul>
        </div>
        `,
            category: 'fittings',
            rating: 4.5,
            image: 'https://astra-slide.vercel.app/assets/products/MDC.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/MDC.jpg',
                'https://astra-slide.vercel.app/assets/products/MDC-2.jpg',
            ],
            features: ['Anti-vortex safety design', 'Flush-mount installation', 'UV-resistant ABS']
        },

        {
            id: 'flange',
            title: 'Flange',
            description: `
                <div>
                    <p>Precision-moulded connection component that secures fittings, skimmers, and lights firmly to pool walls with a watertight seal. Built from chemically resistant ABS plastic — withstands constant water contact, UV exposure, and pool chemical environments.</p>
                    <p>Available in:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">Inside Thread</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Outside Thread</div>
                    </div>

                    <p>Finishes: Grey</p>

                    <p>Features:</p>
                    <ul>
                        <li>Compatible with inlets</li>
                        <li>Simple bolt-on installation — no specialist tools required</li>
                        <li>Resistant to chlorine, saltwater, and UV radiation</li>
                    </ul>
                </div>
            `,
            category: 'fittings',
            rating: 4.4,
            image: 'https://astra-slide.vercel.app/assets/products/flange.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/flange.jpg',
                'https://astra-slide.vercel.app/assets/products/flange-2.jpg',
            ],
            features: ['Watertight seal', 'Rubber gasket included', 'Chemical & UV resistant']
        },

        {
            id: 'long-throat-skimmer',
            title: 'Long Throat Skimmer',
            description: `
        <div>
            <p>Wall-mounted surface-cleaning device that continuously draws the pool's top water layer through an adjustable weir door — removing leaves, oils, sunscreen, and floating debris before they sink or foul your filter. Extended throat design boosts skimming efficiency by up to 30% over standard skimmers.</p>
            <p>Connection sizes:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">1.5" BSP</div>
                <div class="city-pill" style="background-color: #EFF6FF;">2" BSP</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>Extended throat (~250mm) improves skimming efficiency by up to 30%</li>
                <li>Auto-adjusting weir door maintains optimal water flow across varying pool conditions</li>
                <li>Flow capacity up to 12 m³/hr</li>
            </ul>
        </div>
        `,
            category: 'fittings',
            rating: 4.6,
            image: 'https://astra-slide.vercel.app/assets/products/ASWS.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/ASWS.jpg',
                'https://astra-slide.vercel.app/assets/products/ASWS-3.jpg',
                'https://astra-slide.vercel.app/assets/products/ASWS-2.jpg',
            ],
            features: ['30% more efficient skimming', 'Auto-adjusting weir door', 'Tool-free basket removal']
        },

        {
            id: 'water-bar',
            title: 'Water Bar',
            description: `
        <div>
            <p>Corrosion-resistant inlet fitting that delivers filtered, treated water back into the pool in a controlled, directional flow. Flush-wall design with a 360° swivel nozzle to eliminate dead zones and optimise circulation throughout the pool.</p>
            <p>Connection sizes:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">8"</div>
                <div class="city-pill" style="background-color: #EFF6FF;">10"</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>Flush-mount integrates seamlessly with tiled pool walls</li>
                <li>Resistant to pool chemicals, saltwater, and UV degradation</li>
                <li>Suitable for both skimmer and overflow pool systems</li>
                <li>Max flow: 8 m³/hr | Operating temp: up to 50°C</li>
            </ul>
        </div>
        `,
            category: 'fittings',
            rating: 4.4,
            image: 'https://astra-slide.vercel.app/assets/products/wb.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/wb.jpg',
                'https://astra-slide.vercel.app/assets/products/wb-2.jpg',
            ],
            features: ['360° swivel nozzle', 'Flush-wall mount', 'Chemical & UV resistant']
        },

        {
            id: 'pool-regulator',
            title: 'Pool Regulator',
            description: `
        <div>
            <p>Precision water level control device that automatically maintains a consistent pool water level — releasing water when levels drop. Essential for overflow and skimmer pool systems. Works silently to protect your filtration system from running dry.</p>
            <p>Features:</p>
            <ul>
                <li>Automatically maintains optimal water level — no manual intervention</li>
                <li>Prevents pump and filter damage from dry-running</li>
                <li>Float valve mechanism connects to mains water supply</li>
                <li>Installs close to skimmer box or balance tank</li>
                <li>PVC body | Stainless steel float arm | Max pressure: 4 bar</li>
            </ul>
        </div>
        `,
            category: 'fittings',
            rating: 4.5,
            image: 'https://astra-slide.vercel.app/assets/products/pool-reg.png',
            images: [
                'https://astra-slide.vercel.app/assets/products/pool-reg.png',
            ],
            features: ['Automatic water level control', 'Protects pump from dry-running', 'Virtually maintenance-free']
        },

        {
            id: 'inlet-fitting',
            title: 'Inlet Fitting',
            description: `
        <div>
            <p>The critical junction point between your filtration return line and the pool interior. Channels filtered, treated water back into the pool at the correct angle and velocity to create efficient full-pool circulation. Corrosion-proof construction ensures lifetime performance.</p>
            <p>Connection sizes:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">1.5" BSP</div>
                <div class="city-pill" style="background-color: #EFF6FF;">2" BSP</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>Directional 360° swivel eyeball for optimised circulation</li>
                <li>UV-resistant materials prevent yellowing and cracking</li>
                <li>Simple screw-in installation — compatible with standard pool pipework</li>
            </ul>
        </div>
        `,
            category: 'fittings',
            rating: 4.4,
            image: 'https://astra-slide.vercel.app/assets/products/ret-in.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/ret-in.jpg',
                'https://astra-slide.vercel.app/assets/products/ret-in2.jpg',
                'https://astra-slide.vercel.app/assets/products/ret-in3.jpg',
                'https://astra-slide.vercel.app/assets/products/ret-in4.jpg',
                'https://astra-slide.vercel.app/assets/products/ret-in5.jpg',
            ],
            features: ['360° swivel eyeball', 'UV-resistant ABS', 'Straight & angled variants']
        },

        {
            id: 'phoenix-tail-nozzle',
            title: 'Phoenix Tail Nozzle',
            description: `
        <div>
            <p>High-performance adjustable return nozzle engineered to deliver filtered water back into the pool with maximum directional control. Its tilt-and-lock design eliminates stagnant zones — ensuring every corner of the pool receives fresh, circulating water.</p>
            <p>Connection sizes:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">1.5" BSP</div>
                <div class="city-pill" style="background-color: #EFF6FF;">2" BSP</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>Tilt-and-lock adjustment provides precise directional control of return water</li>
                <li>Suitable for residential and commercial pools</li>
                <li>30° tilt range from vertical</li>
            </ul>
        </div>
        `,
            category: 'fittings',
            rating: 4.7,
            image: 'https://astra-slide.vercel.app/assets/products/PTL.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/PTL.jpg',
                'https://astra-slide.vercel.app/assets/social/nozzle.png',
            ],
            features: ['Tilt-and-lock directional control', 'Eliminates dead zones', 'UV-stabilised ABS']
        },


        // ─── COLLECTION 2: PUMPS & FILTRATION ─────────────────────────────────────

        {
            id: 'swimming-pool-pump',
            title: 'Swimming Pool Pump',
            description: `
                <div>
                    <p>Heavy-duty circulation pump designed to keep pool water moving, filtered, and treated at all times. Featuring a powerful motor, large pre-filter basket, and corrosion-resistant wet-end components — built for continuous operation in demanding tropical environments.</p>
                    <p>Available in:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">1 HP</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">1.5 HP</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">2 HP</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">3 HP</div>
                    </div>
                    
                    <p>Features:</p>
                    <ul>
                        <li>High-efficiency motor with consistent flow rates of 8–35 m³/hr</li>
                        <li>Large pre-filter basket captures debris before it reaches the impeller</li>
                        <li>Quiet operation — suitable for residential and hospitality environments</li>
                    </ul>
                </div>
            `,
            category: 'pumps-filters',
            rating: 4.8,
            image: 'https://astra-slide.vercel.app/assets/products/APPSS-1.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/APPSS-1.jpg',
                'https://astra-slide.vercel.app/assets/products/APPSS-2.jpg',
                'https://astra-slide.vercel.app/assets/products/APPSS-3.jpg',
                'https://astra-slide.vercel.app/assets/products/APPSS-4.jpg',
                'https://astra-slide.vercel.app/assets/products/APPSS-5.jpg',
            ],
            features: ['Energy efficient', 'Quiet operation', 'Pre-filter basket included']
        },

        {
            id: "fountain-pump",
            title: "Fountain Pump",
            description: `
                <div>
                    <p>A dedicated submersible pump engineered specifically for pool fountain jets, decorative water features, and ornamental water displays. Unlike standard circulation pumps, the Astraslide Fountain Pump is optimised for high-head, low-volume flow — delivering the strong, upward pressure required to push water through fountain nozzles and jet heads at height and with consistent force.</p>

                    <p>Flow rate options:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">1,500 L/hr (Single nozzle)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">3,500 L/hr (Multi-nozzle)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">6,000 L/hr (Commercial)</div>
                    </div>
                    <p>Features:</p>
                    <ul>
                        <li>Includes interchangeable nozzle adapters for different fountain jet patterns</li>
                        <li>Stainless steel shaft and ceramic bearing — chemical and wear resistant</li>
                        <li>Compatible with Astraslide Jet Nozzles and LED fountain lights</li>
                    </ul>
                </div>
            `,
            category: "pumps-filters",
            rating: 4.6,
            image: "https://astra-slide.vercel.app/assets/products/fountain-pump.jpg",
            images: [
                "https://astra-slide.vercel.app/assets/products/fountain-pump.jpg",
            ],
            features: [
                "Submersible high-head design",
                "Silent motor operation",
                "Interchangeable nozzle adapters",
                "Stainless steel shaft & ceramic bearing"
            ]
        },

        {
            id: "air-blower-pump",
            title: "Air Blower Pump",
            description: `
                <div>
                    <p>The Astraslide Air Blower Pump is a high-performance electric blower designed to inject pressurised air into pool water through dedicated air inlet fittings. It operates independently of the water circulation system, drawing in ambient air and forcing it through a dedicated air manifold and into the pool floor or seating bench jets.</p>
                    <p>Available power ratings:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">550W (Residential Spa / Plunge Pool)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">1,100W (Hydrotherapy Pool)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">1,500W (Commercial Spa / Leisure Pool)</div>
                    </div>
                    <p>Features:</p>
                    <ul>
                        <li>Thermal overload protection automatically cuts power if the motor overheats</li>
                        <li>Sealed motor housing rated for outdoor poolside installation in humid conditions</li>
                        <li>Compatible with standard 50mm air distribution manifolds and pool air jet fittings</li>
                    </ul>
                </div>
                `,
            category: "pumps-filters",
            rating: 4.5,
            image: "https://astra-slide.vercel.app/assets/products/air-blower.jpg",
            images: [
                "https://astra-slide.vercel.app/assets/products/air-blower.jpg",
            ],
            features: [
                "High-volume air blower output",
                "Thermal overload protection",
                "Sealed motor for humid environments",
                "Timer-compatible independent operation"
            ],
        },

        {
            id: 'combo-filter-pump',
            title: 'Combo Filter Pump',
            description: `
                <div>
                    <p>All-in-one circulation and filtration unit integrating pump, filter, and media into a single compact package. Ideal for residential pools, above-ground pools, and maintenance setups where space is at a premium. Simply connect, fill, and run.</p>
                    <p>Available in:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">1 HP</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">2 HP</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">3 HP</div>
                    </div>
                    
                    <p>Features:</p>
                    <ul>
                        <li>Complete pump-and-filter system — no separate plumbing required</li>
                        <li>Plug-and-play design dramatically reduces installation time and cost</li>
                        <li>Integrated 6-position multi-port valve: filter, backwash, rinse, and waste</li>
                    </ul>
                </div>
                `,
            category: 'pumps-filters',
            rating: 4.6,
            image: 'https://astra-slide.vercel.app/assets/products/cfp.png',
            images: [
                'https://astra-slide.vercel.app/assets/products/cfp.png',
                'https://astra-slide.vercel.app/assets/products/pool-filter.jpg',
            ],
            features: ['All-in-one system', '6-position multi-port valve', 'Plug-and-play installation']
        },

        {
            id: 'filter-cover',
            title: 'Filter Cover',
            description: `
        <div>
            <p>Durable, watertight top cover for pool filter tanks — secures filtration media inside while providing easy access for backwash and media replacement. Pressure-tight seal ensures no bypass of unfiltered water.</p>
            <p>Available in:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">10"</div>
                <div class="city-pill" style="background-color: #EFF6FF;">12"</div>
                <div class="city-pill" style="background-color: #EFF6FF;">14"</div>
                <div class="city-pill" style="background-color: #EFF6FF;">16"</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>Pressure-tight EPDM O-ring gasket seal — no unfiltered water bypass</li>
                <li>UV-stabilised ABS resists discolouration in tropical climates</li>
                <li>Tool-free access for easy maintenance</li>
            </ul>
        </div>
        `,
            category: 'pumps-filters',
            rating: 4.3,
            image: 'https://astra-slide.vercel.app/assets/products/pfc-2.png',
            images: [
                'https://astra-slide.vercel.app/assets/products/pfc-2.png',
                'https://astra-slide.vercel.app/assets/products/pfc.png',
            ],
            features: ['Pressure-tight seal', 'UV-stabilised ABS', 'Tool-free access']
        },

        {
            id: 'filter-media',
            title: 'Filter Media (Glass / Sand)',
            description: `
                <div>
                    <p>The workhorse inside your filtration system — physically trapping dirt, bacteria, algae, and fine particles as water passes through your filter tank. Available in premium silica sand and advanced glass media. Glass media filters down to 5 microns — far superior to standard sand.</p>
                    <p>Available in:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">Silica Sand (0.4–0.8mm)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Glass Bead Media (0.4–0.8mm)</div>
                    </div>
                    
                    <p>Sold in 25kg bags</p>
                    
                    <p>Features:</p>
                    <ul>
                        <li>Glass media filters particles as small as 5 microns (sand: 20–40 microns)</li>
                        <li>Reduced backwash frequency — saves water and energy costs</li>
                        <li>Glass media naturally inhibits bacterial growth within the filter bed</li>
                    </ul>
                </div>
            `,
            category: 'pumps-filters',
            rating: 4.5,
            image: 'https://astra-slide.vercel.app/assets/products/AFM.png',
            images: [
                'https://astra-slide.vercel.app/assets/products/AFM.png',
            ],
            features: ['Glass filters to 5 microns', 'Fewer backwashes needed', 'Up to 5-year lifespan']
        },

        {
            id: 'combo-vacuum-plate',
            title: 'Combo Vacuum Plate',
            description: `
                <div>
                    <p>Adapter plate that connects a manual vacuum hose to your pool's skimmer intake — allowing the pump to draw suction through the vacuum head for manual pool cleaning. Creates an airtight seal for maximum suction power.</p>
                    <p>Features:</p>
                    <ul>
                        <li>Airtight press-fit seal maximises suction from pool pump to vacuum head</li>
                        <li>Allows any standard pool pump to be used for manual vacuuming</li>
                        <li>Eliminates the need for a separate vacuum pump</li>
                        <li>Compatible with Astraslide Combo Bag, Ring, and 1.5" vacuum hose</li>
                        <li>Fits most 8"–9" skimmer baskets</li>
                    </ul>
                </div>
            `,
            category: 'pumps-filters',
            rating: 4.4,
            image: 'https://astra-slide.vercel.app/assets/products/suction.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/suction.jpg',
                'https://astra-slide.vercel.app/assets/products/suction-2.jpg',
            ],
            features: ['Airtight suction seal', 'No separate pump needed', 'Universal skimmer fit']
        },

        {
            id: 'combo-ring',
            title: 'Combo Ring',
            description: `
                <div>
                    <p>Structural accessory forming part of the Astraslide filter combo assembly — providing a stable, aligned connection between filter components. Prevents misalignment, vibration damage, and air leaks within the combo unit system.</p>
                    <p>Features:</p>
                    <ul>
                        <li>Precision-moulded for a perfect fit within the Astraslide Combo system</li>
                        <li>Prevents vibration-induced misalignment between pump and filter</li>
                        <li>Eliminates air ingress at the pump-filter connection point</li>
                        <li>Slide-and-lock installation — no adhesives required</li>
                        <li>Replaceable independently | Max pressure: 2.5 bar</li>
                    </ul>
                </div>
            `,
            category: 'pumps-filters',
            rating: 4.2,
            image: 'https://astra-slide.vercel.app/assets/products/cring.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/cring.jpg',
            ],
            features: ['Precision-moulded fit', 'Prevents air ingress', 'Easy slide-and-lock install']
        },

        {
            id: 'combo-bag',
            title: 'Combo Bag',
            description: `
        <div>
            <p>Fine-mesh filtration bag used within the combo filter unit to capture larger debris before it reaches the sand or glass filter media. Extends filter media lifespan, reduces backwash frequency, and keeps your combo unit running at peak efficiency.</p>
            <p>Available in:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">Standard Mesh</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Fine Mesh</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>Washable and reusable — remove, rinse, and reinstall in seconds</li>
                <li>ABS plastic rim for structural fit</li>
                <li>Compatible with Astraslide Combo Filter Pump range</li>
            </ul>
        </div>
        `,
            category: 'pumps-filters',
            rating: 4.3,
            image: 'https://astra-slide.vercel.app/assets/products/combo-bag.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/combo-bag.jpg',
                'https://astra-slide.vercel.app/assets/products/combo-bag-2.jpg',
            ],
            features: ['Washable & reusable', 'Extends media lifespan', 'Fine & standard mesh options']
        },


        // ─── COLLECTION 3: CLEANING EQUIPMENT ─────────────────────────────────────

        {
            id: 'vacuum-hose',
            title: 'Vacuum Hose',
            description: `
                <div>
                    <p>Flexible, kink-resistant pool vacuum hose that delivers consistent suction from the pool's skimmer to the vacuum head. Made from durable ribbed PVC — maintains full suction capacity even when bent around corners or under pressure.</p>
                    <p>Available lengths:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">6m</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">9m</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">12m</div>
                    </div>
                    
                    <p>Features:</p>
                    <ul>
                        <li>1.5" inner diameter — works with all Astraslide vacuum heads</li>
                        <li>Lightweight construction reduces fatigue during manual vacuuming</li>
                        <li>Push-fit swivel cuff connections on both ends</li>
                    </ul>
                </div>
            `,
            category: 'cleaning',
            rating: 4.4,
            image: 'https://astra-slide.vercel.app/assets/products/hose.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/hose.jpg',
                'https://astra-slide.vercel.app/assets/products/hose-2.jpg',
            ],
            features: ['Kink-resistant', 'Swivel cuff fittings', '6m / 9m / 12m options']
        },

        {
            id: 'anodized-vacuum-head',
            title: 'Anodized Vacuum Head',
            description: `
                <div>
                    <p>Premium aluminium vacuum head with a hard-anodised finish that glides smoothly across pool floors and walls while picking up dirt, sand, algae, and fine debris. Three times more durable than standard plastic heads — the preferred choice for professional pool cleaners.</p>
                    <p>Available widths:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">14" / 350mm (Standard)</div>
                    </div>
                    
                    <p>Features:</p>
                    <ul>
                        <li>Hard-anodised aluminium body — 3× more durable than plastic</li>
                        <li>Fits standard 1.5" vacuum hoses and telescopic poles (5/8" taper)</li>
                        <li>Superior debris pickup on uneven surfaces</li>
                    </ul>
                </div>
            `,
            category: 'cleaning',
            rating: 4.7,
            image: 'https://astra-slide.vercel.app/assets/social/anode.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/social/anode.jpg',
                'https://astra-slide.vercel.app/assets/products/anode.jpg',
            ],
            features: ['Hard-anodised aluminium', '360° swivel neck', 'Rotating rubber wheels']
        },

        {
            id: 'swimming-pool-brush',
            title: 'Swimming Pool Brush',
            description: `
                <div>
                    <p>Essential manual cleaning tool designed to loosen algae, mineral deposits, and biofilm from pool walls, floors, and steps before vacuuming. Firm nylon bristles scrub effectively without scratching tiled, plastered, or fibreglass surfaces.</p>
                    <p>Available types:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">Standard Nylon 18"</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Combo (Nylon + Stainless)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Curved (Corners & Steps)</div>
                    </div>
                    
                    <p>Features:</p>
                    <ul>
                        <li>Compatible with all standard telescopic pool poles (5/8" taper)</li>
                        <li>Lightweight — reduces arm fatigue during extended cleaning sessions</li>
                        <li>Ideal for pre-treatment scrubbing before chemical shock</li>
                    </ul>
                </div>
            `,
            category: 'cleaning',
            rating: 4.4,
            image: 'https://astra-slide.vercel.app/assets/products/pool-brush.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/pool-brush.jpg',
                'https://astra-slide.vercel.app/assets/products/pool-brush-2.jpg',
            ],
            features: ['Surface-safe nylon bristles', 'Angled aluminium back', 'Curved corner model available']
        },

        {
            id: 'heavy-duty-algae-brush',
            title: 'Heavy Duty Algae Brush',
            description: `
                <div>
                    <p>Purpose-built for tackling heavy algae blooms, stubborn green stains, and persistent biofilm. Reinforced stainless steel bristles cut through thick algae growth with force and efficiency — the professional's choice for neglected pools and severe outbreaks.</p>
                    <p>Available sizes:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">18" Standard</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">24" Commercial</div>
                    </div>
                    
                    <p>Features:</p>
                    <ul>
                        <li>Grade 304 stainless steel bristles power through heavy algae and staining</li>
                        <li>Reinforced aluminium head withstands aggressive scrubbing</li>
                        <li>Designed for concrete, Gunite, and rough-surface pool walls</li>
                        <li>Highly effective in combination with algaecide treatments</li>
                        <li>Compatible with all standard telescopic pool poles (5/8" taper)</li>
                    </ul>
                </div>
            `,
            category: 'cleaning',
            rating: 4.6,
            image: 'https://astra-slide.vercel.app/assets/products/algae-2.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/algae-2.jpg',
                'https://astra-slide.vercel.app/assets/products/algae.jpg',
            ],
            features: ['Stainless steel bristles', 'Reinforced aluminium head', '18" & 24" sizes']
        },

        {
            id: 'swimming-pool-net',
            title: 'Swimming Pool Net',
            description: `
        <div>
            <p>The fastest, easiest tool for removing leaves, insects, blossoms, and large floating debris from pool water. Deep-bag fine-mesh design ensures debris is captured and held securely — not dragged across the surface and redistributed.</p>
            <p>Available types:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">Flat Skimmer Net</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Deep Bag Net</div>
            </div>
            
            <p>Mesh options: Fine | Coarse</p>
            
            <p>Features:</p>
            <ul>
                <li>Deep-bag (200mm) fine-mesh net holds debris without re-scattering</li>
                <li>Compatible with all standard telescopic pool poles (5/8" taper)</li>
                <li>430mm frame width — covers large surface area per pass</li>
            </ul>
        </div>
        `,
            category: 'cleaning',
            rating: 4.5,
            image: 'https://astra-slide.vercel.app/assets/products/net.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/net-2.jpg',
                'https://astra-slide.vercel.app/assets/products/net.jpg',
            ],
            features: ['Deep-bag design', 'Anodised aluminium frame', 'Fine & coarse mesh options']
        },


        // ─── COLLECTION 4: LIGHTING & WATER FEATURES ──────────────────────────────

        {
            id: 'conduit-light',
            title: 'Conduit Light',
            description: `
        <div>
            <p>Compact, watertight pool light housing that directs a focused beam of light underwater through a sealed conduit. Its sealed design provides complete electrical isolation from pool water — one of the safest pool lighting solutions on the market.</p>
            <p>Available types:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">Single Conduit</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Multi-Conduit</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>IP68 fully waterproof rating</li>
                <li>Compatible with 300W pool lighting transformers</li>
                <li>Works with LED or halogen PAR56 bulbs (up to 300W halogen / 50W LED)</li>
            </ul>
        </div>
        `,
            category: 'lighting',
            rating: 4.5,
            image: 'https://astra-slide.vercel.app/assets/products/conduit.png',
            images: [,
                'https://astra-slide.vercel.app/assets/products/conduit.png',
            ],
            features: ['IP68 waterproof', 'Complete electrical isolation', '12V low voltage']
        },

        {
            id: 'junction-box',
            title: 'Junction Box',
            description: `
        <div>
            <p>Weatherproof junction box for safe and reliable electrical connections in outdoor environments. Designed for easy installation and maintenance, with ample space for wiring and connections.</p>
            <p>Available in:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">Standard Size</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Large Size</div>
            </div>

            <p>Features:</p>
            <ul>
                <li>Robust construction for durability in harsh environments</li>
                <li>Easy access for maintenance and wiring changes</li>
                <li>Multiple cable entry points for flexible installation</li>
            </ul>
        </div>
        `,
            category: 'fittings',
            rating: 4.5,
            image: 'https://astra-slide.vercel.app/assets/products/AJB.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/AJB.jpg',
                'https://astra-slide.vercel.app/assets/products/AJB-3.png',
                'https://astra-slide.vercel.app/assets/products/AJB-2.jpg',
            ],
            features: ['Weatherproof design', 'Easy installation', 'Ample wiring space']
        },

        {
            id: 'underwater-surface-light',
            title: 'Underwater Surface Light',
            description: `
        <div>
            <p>Wall-mounted, fully submersible pool light that floods the pool interior with bright, even illumination. Flush-mount installation creates a sleek, unobtrusive look — making the pool safe and visually striking after dark.</p>
            <p>Available wattages:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">Power Dependent</div>
            </div>
            
            <p>Colours: White | RGB Colour-Changing</p>
            
            <p>Features:</p>
            <ul>
                <li>IP68 waterproof — rated for permanent underwater installation</li>
                <li>RGB option with single colour modes and colour cycle</li>
                <li>LED lifespan: 50,000+ hours</li>
            </ul>
        </div>
        `,
            category: 'lighting',
            rating: 4.7,
            image: 'https://astra-slide.vercel.app/assets/products/APLWMT.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/APLWMT.jpg',
                'https://astra-slide.vercel.app/assets/products/APLWMT-2.jpg',
                'https://astra-slide.vercel.app/assets/products/APLWMT-3.jpg',
                'https://astra-slide.vercel.app/assets/products/conduit.png',
            ],
            features: ['IP68 waterproof', '120° wide beam', 'RGB colour-changing option']
        },

        {
            id: 'pool-light-transformer',
            title: 'Pool Light Transformer',
            description: `
        <div>
            <p>Mains-to-low-voltage transformer that safely steps down 220V supply to the 12V AC required by pool lighting systems. A non-negotiable safety component in any pool lighting installation — ensures no mains voltage ever reaches pool water.</p>
            <p>Available capacities:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">150VA (1–2 lights)</div>
                <div class="city-pill" style="background-color: #EFF6FF;">300VA (3–5 lights)</div>
                <div class="city-pill" style="background-color: #EFF6FF;">600VA (Commercial)</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>Steps 220V down to safe 12V AC — essential safety device</li>
                <li>CE / RoHS compliant safety standard</li>
                <li>Compatible with all Astraslide pool lights and LED bulbs</li>
            </ul>
        </div>
        `,
            category: 'lighting',
            rating: 4.6,
            image: 'https://astra-slide.vercel.app/assets/products/ALT.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/ALT.jpg',
            ],
            features: ['220V to 12V step-down', 'IP44 weatherproof enclosure', 'CE / RoHS certified']
        },

        {
            id: "curved-and-cobra-waterfall",
            title: "Waterfall Curved Cobra & Concave",
            description: `
                <div>
                    <p>The Astraslide Curved Waterfall range includes two distinctive blade profiles — the <strong>Cobra</strong> (an arched, forward-sweeping spout that launches a dramatic arc of water) and the <strong>Concave</strong> (an inward-curved blade that produces a wide, fanning curtain of water).</p>
                    <p>Available spout widths:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">3ft</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">4ft</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">5ft</div>
                    </div>
                    <p>Finish: Brushed or Mirror-polished Stainless Steel 304</p>
                    <p>Features:</p>
                    <ul>
                        <li>Cobra profile: sweeping arc spout creates a dramatic water projectile effect</li>
                        <li>Concave profile: inward-curved blade fans water into a wide, even curtain cascade</li>
                    </ul>
                </div>
            `,
            category: "lighting",
            rating: 4.8,
            image: "https://astra-slide.vercel.app/assets/products/cobra.jpg",
            images: [
                "https://astra-slide.vercel.app/assets/products/cobra.jpg",
                "https://astra-slide.vercel.app/assets/products/concave-waterfall.jpg",
            ],
            features: [
                "Cobra & Concave blade profiles",
                "Grade 304 stainless steel",
                "3ft, 4ft and 5ft widths",
                "Optional integrated LED lighting"
            ]
        },

        {
            id: "jet-nozzle",
            title: "Jet Nozzle",
            description: `
                <div>
                    <p>The Astraslide Jet Nozzle threads directly onto fountain pump outlets or manifold distribution points, converting pump pressure into a controlled, visually striking water display.</p>
                    <p>Jet patterns available:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">Single Jet (Vertical Column)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Fan Nozzle (Wide Spray Arc)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Tulip Nozzle (Multi-directional Crown)</div>
                    </div>
                    <p>Material: Stainless Steel 304 | Connection: 0.75" – 1.5" BSP</p>
                    <p>Features:</p>
                    <ul>
                        <li>Precision-machined nozzle orifice produces consistent, high-definition jet patterns</li>
                        <li>Multiple pattern options allow customisation of fountain display aesthetics</li>
                        <li>Works in combination with Astraslide LED Fountain Lights for spectacular nighttime displays</li>
                    </ul>
                </div>
            `,
            category: "lighting",
            rating: 4.6,
            image: "https://astra-slide.vercel.app/assets/products/jet-nozzle.jpg",
            images: [
                "https://astra-slide.vercel.app/assets/products/jet-nozzle.jpg",
            ],
            features: [
                "Grade 304 stainless steel",
                "Multiple jet pattern options",
                "0.75 – 1.5 BSP threaded connection",
                "Compatible with Astraslide Fountain Pump & LED lights"
            ]
        },

        {
            id: 'underwater-led-bulb',
            title: 'Underwater LED Bulb',
            description: `
        <div>
            <p>Direct drop-in replacement for traditional halogen PAR56 pool bulbs — delivering up to 80% less energy consumption, dramatically longer lifespan, and brighter output. No housing modifications required. Switch once and enjoy years of energy-efficient brilliance.</p>
            <p>Available wattages:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">12W (≈100W halogen)</div>
                <div class="city-pill" style="background-color: #EFF6FF;">18W (≈150W halogen)</div>
                <div class="city-pill" style="background-color: #EFF6FF;">35W (≈300W halogen)</div>
            </div>
            
            <p>Colours: Cool White (6000K) | Warm White (3000K) | RGB</p>
            
            <p>Features:</p>
            <ul>
                <li>Drop-in PAR56 2-pin replacement — fits existing light housings</li>
                <li>Up to 80% less energy than equivalent halogen bulbs</li>
                <li>50,000-hour rated lifespan — eliminates frequent replacements</li>
            </ul>
        </div>
        `,
            category: 'lighting',
            rating: 4.8,
            image: 'https://astra-slide.vercel.app/assets/social/bulb.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/social/bulb.jpg',
            ],
            features: ['80% energy saving', '50,000hr lifespan', 'Direct PAR56 replacement']
        },

        {
            id: '3-eyed-led-fountain-light',
            title: '3-Eyed LED Fountain Light',
            description: `
        <div>
            <p>Strikingly designed underwater lighting unit featuring three individual LED "eyes" in a compact submersible housing. Creates a dramatic colour spectacle within pool water — perfectly suited to fountain jets, feature walls, and decorative pool zones.</p>
            <p>Available colours:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">RGB Colour-Changing</div>
                <div class="city-pill" style="background-color: #EFF6FF;">White</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Blue</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>IP68 fully waterproof — safe for permanent submersion</li>
                <li>Low-voltage 12V operation via standard pool transformer</li>
                <li>3W total power (3 × 1W LEDs) | 120° beam angle per LED</li>
            </ul>
        </div>
        `,
            category: 'lighting',
            rating: 4.5,
            image: 'https://astra-slide.vercel.app/assets/products/3eyed.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/3eyed.jpg',
            ],
            features: ['Full RGB spectrum', 'IP68 waterproof', '12V low voltage']
        },

        {
            id: '6-eyed-led-fountain-light',
            title: '6-Eyed LED Fountain Light',
            description: `
        <div>
            <p>Six individual LED light points in a single elegantly designed housing — ideal for mid-sized decorative water features, pool fountains, and accentuated pool zones where wide colour coverage from a single fixture is essential.</p>
            <p>Available colours:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">RGB Colour-Changing</div>
                <div class="city-pill" style="background-color: #EFF6FF;">White</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Warm White</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>IP68 fully waterproof — rated for permanent submersion</li>
                <li>Low-voltage 12V AC/DC connection via pool transformer</li>
                <li>6W total power (6 × 1W LEDs) | 120° beam angle per LED</li>
            </ul>
        </div>
        `,
            category: 'lighting',
            rating: 4.6,
            image: 'https://astra-slide.vercel.app/assets/products/6eyed.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/6eyed.jpg',
            ],
            features: ['6-point LED array', 'Full RGB spectrum', 'IP68 waterproof']
        },

        {
            id: '9-eyed-led-fountain-light',
            title: '9-Eyed LED Fountain Light',
            description: `
        <div>
            <p>The most powerful fountain light in the Astraslide LED range — nine individual LED light points for maximum colour saturation and dramatic underwater illumination. Designed for large fountain rings, feature walls, and commercial pool installations that command attention.</p>
            <p>Available colours:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">RGB Colour-Changing</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Cool White</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Warm White</div>
            </div>
            
            <p>Features:</p>
            <ul>
                <li>Programmable colour modes and speed settings</li>
                <li>IP68 rated — designed for permanent outdoor and underwater installation</li>
                <li>9W total power (9 × 1W LEDs) | ~150mm diameter</li>
            </ul>
        </div>
        `,
            category: 'lighting',
            rating: 4.7,
            image: 'https://astra-slide.vercel.app/assets/products/9eyed.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/9eyed.jpg',
            ],
            features: ['9-point LED array', 'Programmable colour modes', 'IP68 waterproof']
        },

        {
            id: 'stainless-steel-waterfall',
            title: 'Stainless Steel Waterfall',
            description: `
        <div>
            <p>Premium water feature creating a breathtaking laminar sheet of water cascading from a precision-engineered stainless steel blade. Mirror-polished knife-edge spout produces a clean, glass-like water curtain — stunning by day and dramatically lit at night.</p>
            <p>Available blade widths:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">300mm</div>
                <div class="city-pill" style="background-color: #EFF6FF;">600mm</div>
                <div class="city-pill" style="background-color: #EFF6FF;">900mm</div>
            </div>
            
            <p>Finishes: Mirror Polished | Brushed | With or without integrated LED</p>
            
            <p>Features:</p>
            <ul>
                <li>Connects to pool pump return lines — no separate pump required</li>
                <li>Optional integrated 12V RGB LED lighting for nighttime illumination</li>
                <li>Flow rate: 5–25 m³/hr (width dependent)</li>
            </ul>
        </div>
        `,
            category: 'lighting',
            rating: 4.9,
            image: 'https://astra-slide.vercel.app/assets/products/ASSWD.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/ASSWD.jpg',
                'https://astra-slide.vercel.app/assets/products/ASSWD-2.jpg',
                'https://astra-slide.vercel.app/assets/products/ASSWD-3.jpg',
            ],
            features: ['Grade 304 stainless steel', 'Laminar water sheet', 'Optional RGB LED lighting']
        },

        {
            id: 'acrylic-waterfall',
            title: 'Acrylic Waterfall',
            description: `
                <div>
                    <p>Modern, lightweight waterfall featuring a crystal-clear acrylic face that creates a stunning backlit water curtain effect when combined with LED lighting. Light passes directly through the water sheet — creating a glowing, iridescent cascade unlike anything a stainless steel unit can produce.</p>
                    <p>Available blade widths:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">300mm</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">600mm</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">900mm</div>
                    </div>
                    
                    <p>Acrylic options: Clear | Blue Tint | Bronze Tint | With or without LED</p>
                    
                    <p>Features:</p>
                    <ul>
                        <li>Brilliant with RGB backlighting for colour-rich nighttime displays</li>
                        <li>Lightweight construction simplifies wall and spa-edge installation</li>
                        <li>Flow rate: 4–18 m³/hr | Stainless steel support frame</li>
                    </ul>
                </div>
            `,
            category: 'lighting',
            rating: 4.8,
            image: 'https://astra-slide.vercel.app/assets/products/AAWD.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/AAWD.jpg',
                'https://astra-slide.vercel.app/assets/products/AAWD-2.jpg',
            ],
            features: ['Backlit LED effect', 'UV-stabilised acrylic', 'Lightweight installation']
        },


        // ─── COLLECTION 5: CHEMICAL & WATER TREATMENT ─────────────────────────────

        {
            id: 'chlorine-feeder',
            title: 'Chlorine Feeder',
            description: `
                <div>
                    <p>In-line or offline chemical dosing device that automatically delivers chlorine or bromine tablets into pool water at a controlled, adjustable rate. Eliminates the fluctuations of manual dosing — resulting in safer water, reduced chemical waste, and far less maintenance effort.</p>
                    <p>Available types:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">Offline (Stand-alone)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">In-line </div>
                    </div>
                    
                    <p>Capacities: 1.5kg | 3kg tablet capacity</p>
                    
                    <p>Features:</p>
                    <ul>
                        <li>Compatible with standard 3" chlorine or bromine tablets</li>
                        <li>Chemical-resistant polycarbonate/ABS body for longevity</li>
                        <li>Prevents chemical under- or over-treatment of pool water</li>
                        <li>Connection: 1.5" / 2" BSP | Max operating pressure: 3 bar</li>
                    </ul>
                </div>
            `,
            category: 'chemicals',
            rating: 4.6,
            image: 'https://astra-slide.vercel.app/assets/products/ACFCC.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/ACFCC.jpg',
                'https://astra-slide.vercel.app/assets/products/feed-a.jpg',
            ],
            features: ['Adjustable dial dosing', 'In-line or offline install', 'Chemical-resistant body']
        },
        // safety
        {
            id: 'swimming-pool-floater',
            title: 'Swimming Pool Floater',
            description: `
                <div>
                    <p>Eases swimming for newbies in a pool and for resting after a long while in the pool.</p>
                    <p>An essential safety fixture for commercial pools, hotel amenities, school swimming programmes, and private residential pools — and a mandatory requirement in most regulated aquatic facilities.</p>
                    <p>Available sizes:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">55cm</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">60cm</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">75cm</div>
                    </div>
                    <p>Colours: High-visibility Orange with White panels</p>
                </div>
            `,
            category: 'safety',
            rating: 4.8,
            image: 'https://astra-slide.vercel.app/assets/social/life-buoy.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/social/life-buoy.jpg',
            ],
            features: ['Zero installation', '6-setting vent control', 'UV-resistant polypropylene']
        },

        {
            id: "life-jacket",
            title: "Life Jacket",
            description: `
                <div>
                    <p>Astraslide Life Jackets are constructed from durable, UV-resistant nylon outer shells with closed-cell foam buoyancy panels that deliver reliable flotation without restricting freedom of movement.</p>
                    <p>Available sizes:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">Child S (15–30 kg)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Child M (30–40 kg)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Adult L (40–70 kg)</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Adult XL (70–90 kg+)</div>
                    </div>
                    <p>Colours: High-visibility Orange, Blue, Yellow</p>
                    <p>Features:</p>
                    <ul>
                        <li>Closed-cell foam panels maintain buoyancy even when fully saturated</li>
                        <li>UV-resistant nylon outer shell resists fading, chemical exposure, and poolside wear</li>
                        <li>High-visibility colours aid rapid identification of swimmers in distress</li>
                    </ul>
                </div>
            `,
            category: "safety",
            rating: 4.8,
            image: "https://astra-slide.vercel.app/assets/products/life-jacket.jpg",
            images: [
                "https://astra-slide.vercel.app/assets/products/life-jacket.jpg",
            ],
            features: [
                "CE-certified buoyancy standard",
                "Closed-cell foam flotation",
                "UV-resistant nylon shell",
                "Child and adult sizes available"
            ],
        },
        // safety

        {
            id: "pool-tiles",
            title: "Pool Tiles",
            description: `
                <div>
                    <p>Astraslide Pool Tiles combine technical performance with striking visual appeal — offering a surface that resists algae adhesion, chemical attack, and physical abrasion while transforming the pool interior into a luminous, colour-rich environment. Available in a range of finishes, profiles, and colours to complement any pool design aesthetic.</p>
                    <p>Tile types available:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">Vitrified Ceramic</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Glass Mosaic</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Anti-Slip Floor Tile</div>
                    </div>
                    <p>Popular finishes: White, Ocean Blue, Cobalt, Aqua Teal, Custom Glaze</p>
                    <p>Features:</p>
                    <ul>
                        <li>Frost and heat resistant — performs reliably through Nigeria's full temperature range</li>
                        <li>Compatible with all standard pool tile adhesives and epoxy grouts</li>
                        <li>Available in standard 20×20cm, 25×25cm, and mosaic 5×5cm formats</li>
                    </ul>
                </div>
            `,
            category: "chemicals",
            rating: 4.6,
            image: "https://astra-slide.vercel.app/assets/products/pool-tiles.jpg",
            images: [
                "https://astra-slide.vercel.app/assets/products/pool-tiles.jpg",
                "https://astra-slide.vercel.app/assets/products/vitrified.jpg",
                "https://astra-slide.vercel.app/assets/products/antislip-tiles.jpg"
            ],
            features: [
                "Water absorption <0.5%",
                "Algae and chemical resistant glaze",
                "Ceramic, glass mosaic and anti-slip options",
                "Multiple colour finishes available"
            ],
        },

        {
            id: "pool-grating",
            title: "Pool Grating",
            description: `
                <div>
                    <p>Astraslide Pool Grating combines technical performance with striking visual appeal — offering a surface that resists algae adhesion, chemical attack, and physical abrasion.</p>
                    <p>Grating types available:</p>
                    <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <div class="city-pill" style="background-color: #EFF6FF;">180mm Width</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">195mm Width</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">250mm Width</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Straight Sections</div>
                        <div class="city-pill" style="background-color: #EFF6FF;">Curved Sections</div>
                    </div>

                    <p>Finishes: White, Beige, Grey, Custom Colours</p>
                    <p>Features:</p>
                    <ul>
                        <li>Designed for overflow pools, deck-level pools, spas, and water features</li>
                        <li>Snap-fit installation system allows quick assembly and replacement</li>
                        <li>UV-resistant and corrosion-proof for long outdoor service life</li>
                        <li>Slip-resistant surface enhances swimmer safety around wet areas</li>
                    </ul>
                </div>
            `,
            category: "fittings",
            rating: 4.8,
            image: "https://astra-slide.vercel.app/assets/products/APGC.jpg",
            images: [
                "https://astra-slide.vercel.app/assets/products/APGC.jpg",
                "https://astra-slide.vercel.app/assets/products/APGC-2.jpg",
                "https://astra-slide.vercel.app/assets/products/APG3HB-2.jpg",
                "https://astra-slide.vercel.app/assets/products/APG3HB-3.jpg",
                "https://astra-slide.vercel.app/assets/products/APGC-3.jpg",
                "https://astra-slide.vercel.app/assets/products/APGC-4.jpg",
                "https://astra-slide.vercel.app/assets/products/APITG.jpg",
                "https://astra-slide.vercel.app/assets/products/APITG-2.jpg"
            ],
            features: [
                "UV-resistant construction",
                "Slip-resistant surface",
                "Quick snap-fit installation",
                "Commercial-grade durability",
                "Overflow drainage efficiency"
            ],
        },

        {
            id: 'corner-tile',
            title: 'Corner Tile',
            description: `
        <div>
            <p>Precision-manufactured ceramic pool tile specifically designed for pool internal corners — where the floor meets the walls. Specially profiled radius design eliminates debris accumulation points and reduces algae growth in hard-to-clean angled joins.</p>
            <p>Available profiles:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">Internal 90° (Standard)</div>
                <div class="city-pill" style="background-color: #EFF6FF;">External 45°</div>
                <div class="city-pill" style="background-color: #EFF6FF;">External 90°</div>
            </div>
            
            <p>Sizes: 10cm × 10cm | 20cm × 20cm</p>
            <p>Colours: White | Light Blue | Custom Glazed</p>
            
            <p>Features:</p>
            <ul>
                <li>ABS construction for durability</li>
                <li>Chemical resistant: pH 3–11 | Frost resistant</li>
                <li>Compatible with all standard pool adhesives and grouts</li>
            </ul>
        </div>
        `,
            category: 'chemicals',
            rating: 4.3,
            image: 'https://astra-slide.vercel.app/assets/products/corner-tile-a.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/corner-tile-a.jpg',
                'https://astra-slide.vercel.app/assets/products/corner-tile.jpg',
            ],
            features: ['Radius coved profile', 'Algae-resistant glaze', 'Vitrified ceramic']
        },


        // ─── COLLECTION 6: POOL HEATING ────────────────────────────────────────────

        {
            id: 'swimming-pool-heater',
            title: 'Swimming Pool Heater',
            description: `
        <div>
            <p>Connects directly to existing pool pipework and operates automatically during normal filtration cycles — delivering consistent warmth without excessive energy costs.</p>
            <p>Available types:</p>
            <div class="cities-grid" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div class="city-pill" style="background-color: #EFF6FF;">Electric 18kW</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Electric 24kW</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Electric 36kW</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Electric 50kW</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Heat Pump 5kW</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Heat Pump 10kW</div>
                <div class="city-pill" style="background-color: #EFF6FF;">Heat Pump 15kW</div>
            </div>
            
            <p>Heat exchanger options: Titanium | Stainless Steel</p>
            
            <p>Features:</p>
            <ul>
                <li>Heat pump COP: 5.0–7.0 (5kW input delivers 25–35kW heat output)</li>
                <li>Automatic on/off based on target temperature — reduces energy consumption</li>
                <li>IP55 rated | 1.5" / 2" BSP in-line connection</li>
            </ul>
        </div>
        `,
            category: 'heating',
            rating: 4.7,
            image: 'https://astra-slide.vercel.app/assets/products/heaters.jpg',
            images: [
                'https://astra-slide.vercel.app/assets/products/heaters.jpg',
                'https://astra-slide.vercel.app/assets/products/heat-a.jpg',
            ],
            features: ['±1°C digital thermostat', 'Heat pump & electric options', 'Titanium or stainless exchanger']
        },

    ]
};

if (typeof module !== 'undefined') {
    module.exports = productsData;
}
window.productsData = productsData;