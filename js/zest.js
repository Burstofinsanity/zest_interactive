// JavaScript Document
var prev_title = '';
var touch_down = false;
var touch_start = new Array;
var vid_play_state = new Array;
vid_play_state['top'] = 'play';
vid_play_state['bottom'] = 'play';
var prev_descption = '';
var company_array = new Array;
var projects_array = new Array;
var products_array = new Array;
var item_type = '';
var touch_x = new Array;
var touch_y = new Array;
var prev_scroll = new Array;
var click_scrol = new Array;
company_array[0]= new Array;
company_array[1]= new Array;
company_array[2]= new Array;
company_array[3]= new Array;
company_array[4]= new Array;
company_array[5]= new Array;

company_array[0]['name'] = 'ENI';
company_array[0]['description'] = 'Electrical, Instrumentation, Control,Engineering and Construction';
company_array[0]['info'] = 'Complete system design of distribution reticulation systems up to 22kV; Design of motor control centres, cable and racking layouts;Design of building services including lighting, power distribution, earthing and lightning protection;Project management of electrical contracts; Design of electrical distribution and utility systems, including power factor correction, energy management, cable/busbar ratings and fault level design;Process measurement and control of temperature, fl ow pressure and level systems;Plant automation and control by means of PLC/SCADA systems;Mimic graphic display and discreet instrumentation plant control;Specialised control stations, control desks and PLC panels;Project management of instrumentation contracts';
company_array[0]['profile'] = "Established in 1984, EnI Electrical has extensive industry experience and an enviablereference base of successfully completed electrical and instrumentation projects.Focused on delivering a project safely, even in the harsh operating conditions found in Africa, EnI Electrical is one of the leading specialist electrical, instrumentation and control systems construction companies in Africa and offers a complete and comprehensive service.";
company_array[0]['images'] = [
    "eni_01.jpg",
    "eni_02.jpg",
    "eni_03.jpg",
    "eni_04.jpg",
    "eni_05.jpg"
];

company_array[1]['name'] = 'Generator Set Division';
company_array[1]['description'] = 'Electric Power Generation';
company_array[1]['info'] = 'Telecommunications;Mining;etail and shopping complexes;otels;Offices;ospitals and clinics;esidential – new or refurbished high rise buildings;nergy – pump and power stations;ndustrial – factories, warehouses and stores;etrochemical – refi neries;unicipal – sewage and water pumping';
company_array[1]['profile'] = 'Reliable standby power options guaranteed to ensure optimum uptime of any operation are readily available from Zest WEG Group. Previously operating as IMS, one of the oldest and largest generator set manufacturers in Cape Town, this Zest WEG Group division supplies standard off-the-shelf generator sets as well as custom built application specific units. Capacities range from 20 kVA up to 2500 kVA and can be increased upwards with multiple synchronised sets. Options include both stationary and portable configurations; all manufactured to stringent quality standards.';
company_array[1]['images'] = [
    "zest_gen_01.jpg",
    "zest_gen_02.jpg",
    "zest_gen_03.jpg",
    "zest_gen_04.jpg",
    "zest_gen_05.jpg"
];

company_array[2]['name'] = 'Shaw Controls';
company_array[2]['description'] = 'Motor Control Centres, Packaged Switchgear Solutions';
company_array[2]['info'] = 'Motor Control Centers;Distribution Boards;Control Desks;PLC Panels;Instrumentation Control Panels;Portable Containerised Substations;Other Custom Built Electrical Panels';
company_array[2]['profile'] = 'Shaw Controls has over 28 years experience as a manufacturer of quality motor control centres (MCCs), distribution boards, control desks, PLC and instrumentation enclosures, portable and containerised substations and various other electrical enclosures. Focused on providing world class electrical instrumentation and control solutions, Shaw Controls has the necessary skill and expertise to make electrical control panels for all types of applications incorporating Zest WEG Group products as well as those from leading suppliers in the switchgear industry. All products are assembled in-house by Shaw Controls’ multi-disciplinary team within a strictly controlled quality accredited environment. ';
company_array[2]['images'] = [
    "shaw_01.jpg",
    "shaw_02.jpg",
    "shaw_03.jpg",
    "shaw_04.jpg",
    "shaw_05.jpg"
];

company_array[3]['name'] = 'Zest Electric Motors';
company_array[3]['description'] = 'Electric Motors, Variable Speed Drives, Transformers, Switchgear';
company_array[3]['info'] = 'Motor Control Centers;Distribution Boards;Control Desks;PLC Panels;Instrumentation Control Panels;Portable Containerised Substations;Other Custom Built Electrical Panels';
company_array[3]['profile'] = 'ZEST distributes, markets and supports a wide range of electric motors, variable speed drives, transformers, and switchgear in sub–Saharan Africa.';
company_array[3]['images'] = [
    "zest_electric_01.jpg",
    "zest_electric_02.jpg",
    "zest_electric_03.jpg",
    "zest_electric_04.jpg",
    "zest_electric_05.jpg"
];

company_array[4]['name'] = 'Zest Energy';
company_array[4]['description'] = 'Integrated Power Generation, Co–Generation and Energy Solutions';
company_array[4]['info'] = 'Diesel generator sets;Heavy fuel oil (HFO) generator sets;Gas generator sets (Natural Gas, Biogas, Syngas); Steam turbo generator sets ;Hydro generators;Mobile HV and MV Substations; HV and MV Substations; HV and MV Substation Refurbishments';
company_array[4]['profile'] = 'Zest Energy boasts extensive expertise in energy generation technologies. Whether a single or a combination of power generation solutions, the company services include the supply, manufacture, erection and maintenance of power generation equipment. These range from intergrated power plants and co-generation systems to custom engineered power generation solutions for new or existing mining and industrial companies.';
company_array[4]['images'] = [
    "zest_energy_01.jpg",
    "zest_energy_02.jpg",
    "zest_energy_03.jpg",
    "zest_energy_04.jpg",
    "zest_energy_05.jpg"
];

company_array[5]['name'] = 'Zest Ghana';
company_array[5]['description'] = 'Electric Motors, Variable Speed Drives, Transformers, Switchgear';
company_array[5]['info'] = 'In addition to the importation and distribution of WEG LV and MV electric motors, drives, transformers and switchgear from Brazil, ZEST also supplies:; Vacuum ring main units (Lucy);Vibrator motors (Invicta);Diesel generators (IMS Cape);Motor Control Centres and packaged switchgear solutions (Shaw Controls);Turnkey instrumentation, control and project management (EnI);Turnkey or power co–generation systems (ZEST Energy)';
company_array[5]['profile'] = 'The Zest WEG Group has a large installed base of products on mines in the West African region and Zest Ghana is focussed on providing customers in the West African region with technical, pre- and post-sales support as well as parts. This technical support hub maintains a product stockholding commensurate with its customer base in Ghana, Cote D’Ivoire and Mali. Ongoing customer support is supplemented by technical training for customer personnel.';
company_array[5]['images'] = [
    "ghana_01.jpg",
    "ghana_02.jpg",
    "ghana_03.jpg",
    "ghana_04.jpg",
    "ghana_05.jpg"
];

products_array[0]= new Array;
products_array[1]= new Array;
products_array[2]= new Array;
products_array[3]= new Array;
products_array[4]= new Array;
products_array[5]= new Array;
products_array[6]= new Array;
products_array[7]= new Array;

products_array[0]['name'] = 'W22';
products_array[0]['description']  = 'Efficiency and Reliability for Industry';
products_array[0]['info'] = 'High performance with maximum energy efficiency, this is the meaning of the new WEG electric motor. High efficiency and Low cost of Ownership throughout the entire motor lifetime have been the basis for the W22 development. A design created to anticipate concepts on performance and energy savings.<br/><b>Lower Total Operational Costs</b><br/>A product that can operate the most of its designed lifetime consuming the minimum possible energy with high levels of productivity operating continuously without unplanned stops and with top performance, thus generating the maximum value to the user - this is what is behind W22 new concept.<br/><b>Built to Last</b><br/>W22 motors are built using high quality cast iron at WEG ownfoundries, assuring maximum durability and high performance in aggressive conditions. The new fan cover design provides great resistance against impacts. Additionally the endshield have been designed for a better bearing heat dissipation.<br/><b>Energy Saving</b><br/>Costs with energy correspond to approximately 90% of total operational costs throughout motor lifetime, being acquisition, installation and maintenance cost the other 10%. W22 new industrial motors platform are supplied with efficiencies above the IE2, IE3 and IE4 minimum required values, thus guaranteeing energy savings and reduced payback time.<br/><b>Inverter Duty Applications</b><br/>The exclusive WISE® insulation system used on the W22 range increases windings dielectrical resistance, thus allowing VFD operation up to 575 V without requiring further modification which results in flexibility and extended motor lifetime. <br/>* Voltages above 575 V, please contact our nearest sales office.<br/><b>Versatility</b><br/>The new concept allows terminal box to be mounted top, right or left by using an extensor without disassembling the complete motor, thus reducing modification time and stocks (available for frame sizes 225S/M to 355A/B).<br/><b>Range Extensions for the Future</b><br/>The W22 line, offering high efficiency and low lifetime costs, will be the basis for further WEG developments.<br/>';
products_array[0]['features'] = 'Energy saving; Increased productivity;Extended lifetime; Lower maintenance; Available as IE2, IE3 and IE4;Available to meet all global energy efficiency requirements';
products_array[0]['video'] = 'w22x.webm';

products_array[1]['name'] = 'W50';
products_array[1]['description']  = 'W22 Line - High Efficiency Motors';
products_array[1]['info'] = 'The increasing demand for electrical energy to sustain global development requires consistent heavy investments in power supply generation. However, in addition to complex medium and long term planning, these investments rely on natural resources, which are becoming depleted due to constant pressures upon the environment. The best strategy, therefore, to maintain energy supply in the short term is to avoid wastage and increase energy efficiency. Electric motors play a major role in this strategy; since around 40% of global energy demand is estimated to be related to electric motor applications. Consequently, any initiatives to increase energy efficiency, by using high efficiency electric motors and frequency inverters, are to be welcomed, as they can make a real contribution to reductions in global energy demand. At the same time as efficiency initiatives make an impact in traditional market sectors, the application of new technologies in emerging sectors is resulting in profound changes in the way that electric motors are applied and controlled. By integrating these changes together with the demands for increased energy efficiency. WEG has taken up the challenge and produced a new design of high efficiency motor; one that exceeds the performance of WEG’s existing W21 motor line, which is recognised worldwide for its quality, reliability and efficiency. Using the latest generation of computerised tools, such as structural analysis software (finite element analysis) and computer fluid dynamics, as well as electrical design optimisation software, an innovative - next generation -product has been developed: the W22 motor.';
products_array[1]['features'] = 'Reduction of noise and vibration levels;Increased energy efficiency and reduced thermal footprint;Easy maintenance;Compatibility with present & future generations of;frequency inverters;Flexible and modular design;Introduction of a slim high voltage motors line';
products_array[1]['video'] = 'w50.webm';

products_array[2]['name'] = 'CFW-11';
products_array[2]['description']  = 'Variable Speed Drives';
products_array[2]['features'] = "1.1 to 2.2kW - 1.5 to 3HP;200-240V - Single-phase ;1.1 to 55kW - 1.5 to 75HP ;200-240V - Three-phase;1.5 to 370kW - 2 to 600HP;380-480V - Three-phase";

products_array[2]['info'] = "<b>Innovative and simple</b><br/>The CFW-11 presents many innovations that are helpful and beneficial to customers, mainly due to the simplicity of its installation and operation. The CFW-11 was developed based on Plug-and-Play philosophy (connect and use) allowing simple and fast installation of the VSD and its accessories. The Keypad has a navigation and programming system similar to mobile phones, with soft-key buttons. It is possible to access the parameters sequentially or through groups of parameters. The Keypad also makes the Oriented Start-up function available, guiding the user through the necessary programming.<b>Flexibility<b/><br/>The CFW-11 adapts to the customer’s needs through a broad range of accessories which are easily installed. Besides this, the standard product comes with a small PLC called Soft PLC that offers PLC functionalities and it allows the costumer for creation of his/her own user applications through the WLP software (programming in LADDER).";
products_array[2]['video'] = 'cfw11.webm';

products_array[3]['name'] = 'Mobile substation';
products_array[3]['description']  = 'Robust, compact, efficient and reliable in the most severe operating conditions.';
products_array[3]['features'] = "A mobile substation is a custom designed, complete electrical substation solution that is engineered to be integrated and assembled on a trailer.  These solutions typically consist of both high and medium voltage switchgear, together with a transformer specifically designed to handle the dynamics of mobility. 	";
products_array[3]['info'] = "Mobile substations are designed to be transported to various operational locations and coupled to the electrical network.  A higher degree of operational flexibility can be achieved through the use of multi-ratio voltage selectors on both the high and medium voltage side. <br/>By virtue of their design, mobile substations allow for increased electrical network availability.  This is achieved through a reduction in the downtime typically associated with network maintenance requirements or breakdowns.  Mobile substations also present a potential sound investment with high capability to mitigate the power challenges we face in Africa.<br/><b>CUSTOM ENGINEERED MOBILE DISTRIBUTION SWITCHING STATIONS EXTEND<br/>MARKET REACH FOR ZEST ENERGY</b><br/>The Zest WEG Group has extended its market reach into a new arena with the successful handover to Eskom’s Central Region of four 22 kV/11 kV unique mobile distribution switching stations, conceptualised and manufactured by Zest Energy, a Zest WEG Group company. These one-of-a-kind fully integrated units were engineered to suit specific Eskom requirements including the ability to be used in different configurations. <br/>The mobile distribution switching stations can be rapidly deployed to a site and quickly connected to support substation maintenance or emergency circumstances, improving the availability of Eskom’s electrical network. These units were also manufactured in accordance with South African road ordinance requirements to eliminate the need for special transportation permits.<br/>“Zest Energy is involved in different types of substation and reticulation project work including fixed type conventional outdoor substations (typically up to 275 kV) as well as mobile substation solutions with a variety of configurations and voltages to meet different customer needs,” Alastair Gerrard, Zest Energy projects manager, says. <br/>“Although the Zest WEG Group has been supplying transformers to Eskom on contract for several years, this is the first time that the group, through Zest Energy, has been tasked with innovating and developing an engineered solution of this type. Working closely with the Eskom project team, we developed this design from scratch to ensure that it met Eskom's standards and specifications. The only off-the-shelf component in the entire mobile switching station is the MV switchboard.<br/>“Part of the integrated solution is that all protection systems are on-board, as well as all supporting systems, to enable the operation of switchgear in a safe and controlled environment. This is essentially a fully-fledged switching station on wheels that runs on external auxiliary power supplied by the customer. There are other versions of mobile switching stations which involve putting switchgear into standard marine shipping containers and transporting them to site, but this product is a truly mobile solution that can easily be moved to site as, and when the need, arises. <br/>“Having proved that we have the in-house capability to develop mobile solutions of various forms designed to meet different customer specifications, we continue to see new market opportunities opening up whereby we can provide other industrial sectors with custom engineered mobile solutions.”<br/>Each mobile distribution switching station comprises two compartments, a medium voltage (MV) switchgear compartment and a switching control compartment, separated by an internal wall. Both compartments can be accessed directly from the outside of the trailer through fold-down single lever operated doors with fully incorporated handrails and steps. There are also sliding doors behind each main door to facilitate safe use of the switching station during extreme weather conditions. <br/>Sollie Herbst, Zest Energy electrical design engineer, adds that safety was a very big factor during the design phase. <br/>“Despite the space constraints associated with such a solution, all safety aspects were taken into account and catered for to the highest standards,” he says. “For instance, the unit is fully controllable from a mimic panel in the switching control compartment of the trailer, effectively removing the operator from the vicinity of the breakers in the MV compartment during switching.”<br/>Each mobile distribution switching station's enclosure is custom built and integrated with a bi-axle, step-deck trailer which is, in turn, equipped with air suspension and ABS brakes. Each switching station incorporates an 11 panel, fixed pattern type MV switchboard (22 kV, 1 200 A, 25 kA/ 3s, 50 Hz) modified to accommodate standard Eskom protection schemes on board. The system is also integrated with other standard Eskom auxiliary systems, including metering, AC/DC power supply, BTU system with batteries and communication. Cable entry is designed as bottom entry through special access doors in the floor of each trailer and each cable can easily be terminated to the MV breaker terminals. <br/>The switching stations can also be used in coastal or polluted regions, owing to their double-insulated enclosure walls and roof as well as the non-corrosive materials of construction.<br/>The Zest Energy team offers extensive expertise in the power generation and energy industry. Whether a single solution or a combination of power generation solutions is required, Zest Energy’s services include the supply, manufacture, erection and maintenance of power generation equipment ranging from complete power plants and co-generation systems to custom engineered power generation and integrated energy solutions for new or existing mining and industrial companies.";
products_array[3]['video'] = "truck.webm";
	
products_array[4]['name'] = 'E-House';
products_array[4]['description']  = 'Robust, compact, efficient and reliable in the most severe operating conditions.';
products_array[4]['features'] = "“What differentiates us in the E-House market is that we’re electrical engineering specialists and we have a precise understanding of the electrical equipment installed in these units,” comments Shaw. “Our approach is to project manage production primarily as an electrical project and then ensure that the mechanical portion suitably matches the electrics. I believe that among the major factors leading to the award of this contract were our Group’s longstanding relationship with our customer, our ability to interpret the customer’s requirements and the necessary engineering, design and manufacturing skills to successfully produce the E-Houses.";
products_array[4]['info'] = 'As Zest WEG Group company, Shaw Controls prepares to despatch the last two units of an order placed by a large materials handling company for seven electrical houses (E-Houses), the company is positioning itself to elevate the design, manufacture and supply of this technology to one of its leading offerings. The seven E-Houses will be installed onto stacker and reclaimer machines being deployed at a coal mine and sea port in Mozambique. <br/>“This is the largest single order in our company’s history to date and our first E-House order as a company within the Zest WEG Group. Much of the design information was leveraged off our holding group company in Brazil where numerous E-House projects have been successfully completed by WEG. This order was secured against both local and international competition,” Shaw Controls managing director Bevan Richards, says. <br/>“The contract was awarded to us after lengthy discussions with the customer, which included a visit to Zest WEG Group by a team from our customer. The contract was concluded on the basis that our Group was able to provide a complete solution. <br/>“We have a clear vision for future growth and expansion into various markets and we regard the E-House market as very appealing, as we’re able to combine our total product offering into a complete E-House solution. This technology is relatively new in South Africa, compared to other parts of the world, but it is becoming more attractive than the traditional containerised substation solution built into either a 6 or 12 metre standard marine container, primarily because these E-House units can be manufactured to customised dimensions. <br/>“Traditionally, Shaw Controls has been involved in supplying containerised substation solutions, but industry in Africa is definitely gravitating towards custom-built E-Houses that suit customers’ requirements in terms of the amount of equipment that can be fitted into it, which often exceeds the limits of a container.”<br/>Work on the seven E-Houses began in March 2013 and the final units will shortly be despatched. Shaw Controls has designed, procured and installed all the electrical equipment contained within the E-Houses including medium voltage (MV) switchgear, MV transformers, low voltage (LV) motor control centres, LV variable speed drives, HVAC, fire detection and suppression, PLCs and cabling. Many of these products were supplied by Zest WEG Group’s parent company WEG in Brazil, notably the MV dry type transformers and the variable speed drives. Factory acceptance testing has been conducted at Shaw Controls’ facility in Robertsham, Johannesburg, by representatives of our customer, with units being pre-commissioned prior to despatch to site. A technical team from Shaw Controls will later provide commissioning assistance on site.<br/>The order included electrical and instrumentation design for the full electrical and instrumentation installation of the seven stackers and reclaimers. The design was handed over to the customer who has appointed a contractor to carry out site work according to the design.<br/>The E-Houses are being transported to two different locations. All seven units have been road freighted from Johannesburg to Mozambique under abnormal load conditions. <br/>“What differentiates us in the E-House market is that we’re electrical engineering specialists and we have a precise understanding of the electrical equipment installed in these units,” comments Shaw. “Our approach is to project manage production primarily as an electrical project and then ensure that the mechanical portion suitably matches the electrics. I believe that among the major factors leading to the award of this contract were our Group’s longstanding relationship with our customer, our ability to interpret the customer’s requirements and the necessary engineering, design and manufacturing skills to successfully produce the E-Houses.<br/>“Now that our we’ve demonstrated our ability in South Africa to project manage an undertaking such as this, we’re in a position to proactively compete for further E-House contracts and we see ourselves becoming very animated in this market in the near future. Strongly in our favour is our access to the entire WEG Group basket of goods and technical support, which definitely represents a cost advantage to the customer.<br/>“WEG in Brazil has manufactured E-Houses for the international market for some time and, as a subsidiary of WEG in Africa, we’ve now become the centre of excellence for this technology in the sub-Saharan region. This means that in addition to entering this arena through our own marketing efforts, we will begin to pick up orders through the WEG Group network.”';
products_array[4]['video'] = 'e_house.webm';

products_array[5]['name'] = 'Containerised MCC';
products_array[5]['description']  = "Motor Control Centres (MCC's)";	
products_array[5]['features'] = "Containerised substations provide compact, versatile and easy to handle switchgear solutions for just about any project application.<br/>Containerised substations are custom fitted for specific application requirements and can include electrical, instrumentation and control solutions ranging from LV MCC's to MV RMU’s, transformers and LV MCCs, all in a single container.";
products_array[5]['info'] = "The Shaw Controls Motor Control Centres (MCC’s) offer versatility and can be configured to include, distribution boards and PLC’s. Low voltage MCC’s are available up to 4000 A. Modular in design and manufactured to operate in harsh environments, the MCCs can be customised for individual applications.";
products_array[5]['video'] = 'pv_box.webm';

products_array[6]['name'] = 'Transformer';
products_array[6]['description']  = 'WEG TRANSFORMERS AFRICA BOOSTS ZEST WEG GROUP’S LOCAL MANUFACTURING BASE';
products_array[6]['features'] = 'As a leading manufacturer of power and distribution transformers, WEG is focused on delivering products which incorporate the latest technology to ensure reliable power supply even in harsh operating conditions. </br>Power transformers, auto-transformers and reactors are produced for a wide range of applications with ratings up to 315 MVA and voltages up to 550 kV. All transformers are engineered to meet customer specifications with a focus on reducing energy losses and noise levels while optimising dimensions and weight. </br><b>WEG Transformers Africa</b></br>WEG Transformers Africa mini substations and unit substations have a range of 100 kVA to 1000 kVA in voltages up to 22 kV. The company specialises in Type ‘B’ mini substations, fabricated in mild steel or 3CR12 corrosion resistant steel as recommended in SABS 1029, 1030 and NRS004, with the transformer section complying with SABS 780 and NRS005.</br>The standard size mini substations consist of 100 kVA, 160 kVA, 200 kVA, 315 kVA, 500 kVA, 630 kVA, 800 kVA and 1000 kVA units. HT and LT switchgear can be provided to suit individual requirements, with advice and recommendations on the most appropriate switchgear provided by the company’s experienced engineers.</br>Standard distribution, power and special application transformers range from 50 kVA to 10 000 kVA in voltages up to 66 kV with off-load tap-switch or on- load tap-changers. In addition, the company manufactures special application units for mining, industrial, rectifier/traction, converter and thyristor drive applications. Dimensions are always within SABS recommendations. ';
products_array[6]['info'] = 'The Zest WEG Group’s 2013 acquisition of a transformer manufacturing operation has increased its local manufacturing base and substantially increased its staff complement in South Africa to over 700 people. <br/>Wadeville-based WEG Transformers Africa, formerly Hawker Siddeley Electric Africa, is one of the largest manufacturers of mini substations, unit substations and distribution transformers in the country, with the capability to design and manufacture the complete range presently in use in the country’s industrial sector.<br/>“The acquisition last year of this leading transformer operation is in line with the WEG Group’s 2020 vision to grow the business on this continent both organically and through acquisitions,” Gary Daines, Zest WEG Group’s group sales and marketing director, says. “WEG has a strategic plan to increase its sales by at least 17% year on year until 2020, when it aims to arrive at a turnover of US$10-billion. However, WEG is very aware that in order to participate in the African market, it needs to contribute to the local economy. As a growing local employer, the Zest WEG Group is on board to support our government’s localisation drive and we’re achieving this by continuing to expand our production facilities and developing a robust technical skills base.<br/>“From a group perspective, adding the transformer product range to the Zest WEG Group’s offering is very strategic as it complements all our activities and slots in perfectly with our aggressive Africa growth initiative. We have a phenomenally strong national sales team, as well as a network of branches, which are already starting to sell and support the range.<br/>“An important success factor is that the transformer products are ‘Africanised’ and suitable for local conditions. In their manufacture we ensure suitability for operation and for logistical movement in Africa. This has resulted in a very conservative design that will also place us in a strong position when we export these products into first world markets.”<br/>Since last year’s takeover, WEG Transformers Africa has on embarked a significant upgrade initiative to enhance its equipment, processes and design packages. The initiative includes major improvements to its office buildings and staff amenities. <br/>Danford Mugadza, managing director of WEG Transformers Africa, says the upgrades will bring the company in line with WEG’s technology platform and enable it to compete on the world market. At the same time, the cutting edge technologies being introduced will create significant employment opportunities and increase the rate of skills transfer from WEG’s technical teams in Brazil to the local workforce.<br/>“We’re finding it very rewarding to supplement our operation with all levels of skills and to develop our people through a combination of training them to operate the new equipment and with general skills through the regular Zest WEG Group training programmes,” says Mugadza. “We have a current target to increase our workforce by about 40 people over the next 18 months – nearly a 50% increase in capacity — that will position us for future growth and expansion.<br/>“We’ve set our sights on expanding supply not only within South Africa and to other African countries, but also into the Australasian, Middle Eastern and European markets where WEG has established customer bases. This requires a strong focus on achieving and maintaining world class quality levels and we’ve currently working on standardising our quality in line with other companies in the WEG Group. WEG Transformers Africa is ISO 9001 accredited, but as we grow and develop the business we need to ensure that our quality systems stay abreast of these advances. We’re also improving our environmental standards and investing heavily in making our facility ISO 14000 compliant.”<br/>WEG Transformers Africa mini substations and unit substations have a range from 100 kVA to 1000 kVA in voltages up to 22 kV. The company specialises in Type ‘B’ mini substations, fabricated in mild steel or 3CR12 corrosion resistant steel as recommended in SABS 1029, 1030 and NRS004, with the transformer section complying with SABS 780 and NRS005.<br/>The standard size mini substations consist of 100 kVA, 160 kVA, 200 kVA, 315 kVA, 500 kVA, 630 kVA, 800 kVA and 1000 kVA units. HT and LT switchgear can be provided to suit individual requirements with advice and recommendations on the most appropriate switchgear provided by the company’s experienced engineers.<br/>WEG Transformers Africa’s standard distribution, power and special application transformers range from 50 kVA to 10 000 kVA in voltages up to 66 kV with off-load tap-switch or on- load tap-changers. In addition, the company manufactures special application units for mining, industrial, rectifier/traction, converter and thyristor drive applications. Dimensions are always within SABS recommendations. <br/>Each unit is fully tested in accordance with SABS and other standard specifications and test certificates are available on request. In addition, distribution transformers carry the SABS mark of approval corroborating that the company’s manufacturing facilities are subject to regular routine visits by SABS inspectors.';
products_array[6]['video'] = 'transformer.webm';

projects_array[0]= new Array;
projects_array[1]= new Array;
projects_array[2]= new Array;
projects_array[3]= new Array;
projects_array[4]= new Array;
projects_array[5]= new Array;
projects_array[6]= new Array;

projects_array[0]['name'] = 'Beira Port';
projects_array[0]['description'] ='EnI, ZEST, Shaw Controls';
projects_array[0]['scope'] ='<b>EnI</b>;EnI Design ;Electrical and instrumentation Installation and commissioning. ;<b>ZEST</b> ;LV Motors  - ;200x various LV Motors ;MV Motors ;6x Various MV Motors;Transformers ;<b>Shaw Controls</b>;MCC’s ';
projects_array[0]['info'] ='“Mozambique is also on our radar,” Meiring says. “One of our companies, EnI, recently secured a multi-million US dollar contract which forms part of a massive project to upgrade and improve the shiploading facilities at the Port of Beira, Mozambique, that will see the port upgraded to cope with the intensifying mining activities within the Tete region of the country. The fast track port upgrade is being funded through a major investment by Brazilian mining company Vale, which has also awarded Zest and Shaw Controls, another of our companies, contracts at its Mozambiquan operations.“Our relationship with WEG has provided us with Portuguese-speaking colleagues who have a clear understanding of our products and abilities and we have been able to tap into this support to stimulate business in both Mozambique and Angola,” Meiring says.Zest’s African mobilisation strategy includes efforts to establish more solid relationships with Australian-based consulting companies, many of which are involved in mining projects on the continent. According to Meiring, this has already paid excellent dividends and helped Zest gain exposure for products across all its group companies.'
projects_array[0]['images'] = [
    "beira_port_01.jpg",
    "beira_port_02.jpg",
    "beira_port_03.jpg",
    "beira_port_04.jpg",
    "beira_port_05.jpg"
];

projects_array[1]['name'] = 'Bulyanhulu Gold Mine';
projects_array[1]['description'] ='ZEST, ZEST Energy, Shaw controls, EnI, Transformer ';
projects_array[1]['scope'] ='<b>ZEST</b>;LV Motors  - W22;400 x Various LV Motors;<b>ZEST Energy </b>;G1 – G4 Back Synchronizing Project;G5 Power Project (6x 2MVA Diesel Generators) ;6 x 2500kVA 400/6.6kV Transformers;1 x containerised 6.6kV MV substation;Integration With Existing Control network;Civil designs;Earth system (design, installation);Electrical installation;Plant Synchronisation System;Plant Commissioning;G6 Power Project (5x 2MVA Diesel Generators) ;5 x 2500kVA 400/6.6kV Transformers;1 x containerised 6.6kV MV substation;Integration With Existing Control Network;Electrical Installation;Plant Synchronisation System;Plant Commissioning;<b>Shaw controls</b>; Containerized Substation ;<b>EnI</b>;Electrical and Instrumentation Installation (Greenfields);<b>Transformer </b>;6 x 2500kVA 400/6.6kV Transformers;5 x 2500kVA 400/6.6kV Transformers';
projects_array[1]['info'] = "Bulyanhulu Gold Mine is situated 55km south of Lake Victoria in the district of Kahama, in the Shinyanga Region of the United Republic of Tanzania. It is owned and operated by African Barrick Gold (ABG), a wholly owned subsidiary of Barrick Gold Corporation. Approximately 2,853 personnel were employed at the mine's site by December 2011. The production at the Bulyanhulu mine in 2011 stood at 262,034oz, which was one percent higher when compared to 2010 production rates.";
projects_array[1]['images'] = [
    "bulyanhulu_01.jpg",
    "bulyanhulu_02.jpg",
    "bulyanhulu_03.jpg",
    "bulyanhulu_04.jpg",
    "bulyanhulu_05.jpg"
];

projects_array[2]['name'] = 'Kinsenda';
projects_array[2]['description'] ='ZEST, Shaw controls, ZEST Energy';
projects_array[2]['scope'] ="<b>ZEST </b>;LV Motors  - W22;200x Various LV Motors;MV Motors ;4x 1200Kw 4P 3300V;1x 2700Kw 6P 3300V MGI560;Transformers ;LV VSD’s ;MV VSD’s ;1x 2800Kw 3300V (580Amp);<b>Shaw controls</b>;Containerized MV VSD; Instrumentation MCC’s ;<b>ZEST Energy </b>;Distribution Substation ;Design and Install ; 220KV Substation refurbishment ;Positioning Of Existing 40MVA Transformer;Assembly Of Transformer;Installation Of Radiators;Conservator Installation;Transformer Testing;Remove Old 110KV Switchgear;Installation Of New 110KV Switchgear;Installation Of New Equipment Structures;Complete New Protection Scheme;Commissioning;";
projects_array[2]['info'] ='The Kinsenda Project currently ranks as one of the world’s highest grade copper deposits with declared mineral resources of 20.7 million tonnes at a grade of 5.6% copper. Kinsenda is situated within the Democratic Republic of Congo, near the border town of Kasumbalesa.'
projects_array[2]['images'] = [
    "kinsenda_01.jpg",
    "kinsenda_02.jpg",
    "kinsenda_03.jpg",
    "kinsenda_04.jpg",
    "kinsenda_05.jpg"
];

projects_array[3]['name'] = 'Twangiza';
projects_array[3]['description'] ='ZEST, Shaw controls';
projects_array[3]['scope'] ="<b>Shaw Controls </b>;Containerized substations;MCC’s;<b>ZEST </b>';LV Switchgear;LV Motors  - W22;LV Drives;LV Soft starters";
projects_array[3]['info'] ='"Two “Firsts” for Zest on Twangiza Project". The Zest WEG Group is poised to commission the first total WEG control and automation solution sold to the African market at the Twangiza gold mine in the South Kivu province of the Democratic Republic of Congo (DRC). The mine is owned by the Banro Corporation, a Canadian-based gold exploration and development company.This fast track control and automation order was placed by Senet Projects towards the end of 2010 and incorporates another first for Zest, in that this is the first time that its innovative WEG SRW01 Smart Relays will be deployed on the African continent.The order includes fully containerised MCC’s supplied by Shaw Controls, also part of the Zest WEG Group, as well as WEG Variable Speed Drives (VSD’s) and soft starters and an entire range of WEG LV switchgear. Significantly, all electric motors on this project were specified WEG.Zest Group Business Development Manager, David Claassen, says his company is particularly excited about this order because it is the first fully integrated WEG automation and control solution supplied on the African continent..'
projects_array[3]['images'] = [
    "twangiza_01.jpg",
    "twangiza_02.jpg",
    "twangiza_03.jpg",
    "twangiza_04.jpg",
    "twangiza_05.jpg"
];

projects_array[4]['name'] = 'Konkola North';
projects_array[4]['description'] ='EnI, ZEST, Shaw controls';
projects_array[4]['scope'] ='<b>EnI</b>;Electrical & Instrumentation Installation (Greenfields);<b>ZEST</b>;MV Motors ;1x 6200Kw 6P 11000V MAF900;1x 4400 6P 3300V MGF800;4x 950Kw 10P 11000V MGF630;MV Drives ;1x 4400Kw 3300V;LV Motors  - W22;500x Various LV Motors ;Transformers ;<b>Shaw controls</b>;14x Stand-alone  MCC’s ;1x Containerized Substation ';
projects_array[4]['info'] ='The Zest WEG Group, including EnI Electrical and Shaw Controls, has successfully completed an extensive contract, worth in excess of R200-million, at Lubambe Copper Zambia’s Konkola North Project. This is the single biggest project of its kind that the Zest WEG Group has managed from a perspective of involvement from all group companies. EnI Electrical was instrumental in mitigating any delays in the construction phase, covering all electrical equipment and instrumentation and ensuring the project came in on time and within budget. The scope of the Zest WEG Group’s contract, awarded in 2011, covered the supply of all electrical and instrumentation elements for the expansion infrastructure and wet plant. This includes MV and LV electric motors, MV Variable Speed Drives (VSDs), phase shift transformers and all motor control centres (MCCs), both containerised and free-standing, required for the entire facility.'
projects_array[4]['images'] = [
    "konkola_01.jpg",
    "konkola_02.jpg",
    "konkola_03.jpg",
    "konkola_04.jpg",
    "konkola_05.jpg"
];

projects_array[5]['name'] = 'Edikan Gold Mine';
projects_array[5]['description'] ='Zest';
projects_array[5]['scope'] ='<b>ZEST</b>; MV Motors ;2x 7MW 6P 11000V MAF900;1X 600Kw 10P 11000V MAF560;1x 600Kw 6P 11000V MAF560;1x 550Kw 6P 11000V HGF450;1x 600Kw 6P 11000v HGF560;LV Motors  - W22;400x Various LV Motors ;LV Drives ;50x Various LV VSD’s;Transformers';
projects_array[5]['info'] ='Edikan Gold Mine- (Formerly Central Ashanti Gold Project, Ayanfuri)<br/>Perseus has 650km² of tenements centred on the Ashanti Gold Belt some 25km-65km from the 60-million-ounce Obuasi gold deposit, including two mining leases that are the focus of initial production for the Edikan Gold Mine (EGM). <br/>First gold was produced at EGM on 21 August 2011, and Perseus achieved commercial production on 1 January 2012.'
projects_array[5]['images'] = [
    "edikan_01.jpg",
    "edikan_02.jpg",
    "edikan_03.png",
    "edikan_04.png",
    "edikan_05.jpg"
];

projects_array[6]['name'] = 'Perkoa Zink Mine';
projects_array[6]['description'] ='ENI, ZEST, Shaw controls ';
projects_array[6]['scope'] ='<b>ENI</b>;Design Review ;Installation ;<b>ZEST</b> ;LV Motors  - W22;LV Drives ;Shaw controls ;Containerized Substations ;<b>Burnstone </b>;<b>ZEST </b>;MV Motors ;LV Motors  - W22;MV VSD’s ;Transformers ;<b>ENI </b>;Installation';
projects_array[6]['info'] ='Project:		Perkoa<br/>Client:		Nantou Mining Burkina Faso <br/>Country:		Burkina Faso<br/>Project House:	EnI Electrical<br/>Scope of Supply:	51 x 1.5kW – 110kW 380V CFW09 <br/>Application: 	Various Applications<br/>';
projects_array[6]['images'] = [
    "perkoa_01.jpg",
    "perkoa_02.jpg",	
    "perkoa_03.jpg",
    "perkoa_04.jpg",
    "perkoa_05.jpg"
];

var zest_db ={};
zest_db.webdb = {};
zest_db.webdb.db = null;

zest_db.webdb.open = function() {
	console.log('open');
  var dbSize = 5 * 1024 * 1024; // 5MB
  zest_db.webdb.db = openDatabase("ZestDB", "1", "Zest customer DB", dbSize);
}

zest_db.webdb.onError = function(tx, e) {
  console.log("There has been an error: " + e.message);
}

zest_db.webdb.onSuccess = function(tx, r) {
  // re-render the data.
  // loadTodoItems is defined in Step 4a
  console.log(tx, r);
  zest_db.webdb.getAllClients(loadClientItems);
}

zest_db.webdb.createTable = function() {
  var db = zest_db.webdb.db;
  console.log('create')
  db.transaction(function(tx) {
	tx.executeSql("CREATE TABLE IF NOT EXISTS contact(ID INTEGER PRIMARY KEY ASC, name TEXT, surname TEXT, company TEXT, country TEXT, contact TEXT,email TEXT,products TEXT , added_on DATETIME)", []);
  });
}

zest_db.webdb.addClient = function(name,surname,company,country,contact,email,products) {
  var db = zest_db.webdb.db;
  db.transaction(function(tx){
	  
	var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	
	var d = new Date();
	var curr_day = d.getDay();
	var curr_month = d.getMonth();
	var curr_year = d.getFullYear();
	var curr_hour = d.getHours();
	var curr_min = d.getMinutes();
	var curr_sec = d.getSeconds();
    var addedOn = curr_year+'-'+curr_month+'-'+curr_day+' '+curr_hour+':'+curr_min+':'+curr_sec;
	
	console.log("INSERT INTO contact(name, surname, company, country, contact, email, products, added_on) VALUES ('"+name+"','"+surname+"','"+company+"','"+country+"','"+contact+"','"+email+"','"+products+"','"+addedOn+"')");
    tx.executeSql("INSERT INTO contact(name, surname, company, country, contact, email, products, added_on) VALUES ('"+name+"','"+surname+"','"+company+"','"+country+"','"+contact+"','"+email+"','"+products+"','"+addedOn+"')",
        [],
        zest_db.webdb.onSuccess,
        zest_db.webdb.onError);
   });
}

zest_db.webdb.getAllClients = function(renderFunc) {
  var db = zest_db.webdb.db;
  db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM contact", [], renderFunc,
        zest_db.webdb.onError);
  });
}

function loadClientItems(tx, rs) {
  var rowOutput = "";
  //var clientItems = document.getElementById("todoItems");
  for (var i=0; i < rs.rows.length; i++) {
	  console.log
    console.log( renderClients(rs.rows.item(i)));
  }
 // console.log(rowOutput);
}

function renderClients(row) {
  return "ID : " + row.ID + " - Name : " + row.name + " - surname : " + row.surname + " - company : " + row.company + " - country : " + row.country + " - contact : " + row.contact + " - email : " + row.email + " - products : " + row.products + ";";
}

zest_db.webdb.deleteTodo = function(id) {
  var db = zest_db.webdb.db;
  db.transaction(function(tx){
    tx.executeSql("DELETE FROM contact WHERE ID=?", [id],
        zest_db.webdb.onSuccess,
        zest_db.webdb.onError);
    });
}
zest_db.webdb.clearTable = function(id) {
  var db = zest_db.webdb.db;
  db.transaction(function(tx){
    tx.executeSql("DELETE FROM contact", [id],
        zest_db.webdb.onSuccess,
        zest_db.webdb.onError);
    });
}

function init() {
  zest_db.webdb.open();
  zest_db.webdb.createTable();
  zest_db.webdb.getAllClients(loadClientItems);
}

$(document).on('load',function(){});
$(document).ready(function(e) {
	init();
	
	
	var el = document.documentElement;
	el.requestFullScreen;
	el.webkitRequestFullScreen
	var button_top , button_bottom;
    $('.close').click(
		function(e){
			
			var container_id = $(this).parentsUntil('#bottom,#top').parent().attr('id');	
			$('#'+container_id + ' .content').removeClass('fliper');
			$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
			$(this).parent().parent().addClass('closing');
			$(this).parentsUntil('.phase_2').parent().removeClass('phase_2');
			setTimeout(function(){
			$('#'+container_id+' .closing').removeClass('open');
			$('#'+container_id+' .closing').removeClass('closing');
			$('#'+container_id+' .class_1').removeClass('class_1');
			$('#'+container_id+' .class_2').removeClass('class_2');
			$('#'+container_id+' .class_3').removeClass('class_3');
			$('#'+container_id+' .class_4').removeClass('class_4');
			if(!($('#bottom .content').hasClass('open'))&&!($('#top .content').hasClass('open'))){
									
							$('#hot_spots').animate({opacity:1},1000);
								}
								$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
			},1300);
		}
	);
	 $('.flip').click(
		function(){
			var container_id = $(this).parentsUntil('#bottom,#top').parent().attr('id');	
			$('#'+container_id+ ' .content').removeClass('open');
			setTimeout(function(){
			$('#'+container_id + ' .content .type').toggleClass('fliper');
			$('#'+container_id+ ' .content').addClass('open');
			},500);
		}
	);
	
	$('.button').click(
		function(){
			var container_id = $(this).parent().parent().attr('id');
			var button_id = $(this).attr('id');
			
			if(!($('#'+container_id+ ' .content').hasClass('open')))
			{
				$('#'+container_id+ ' .content').addClass('open');
				var obj = "";
			
			switch(button_id){
				case 'btn_01':
					$('#'+container_id+ ' .content').removeClass('class_2','class_3','class_4');
					$('#'+container_id+ ' .header .icon').removeClass('icon_02 icon_03 icon_04');
					$('#'+container_id+ ' .header .icon').addClass('icon_01');
					$('#'+container_id+ ' .content').addClass('class_1');
					$('#'+container_id+ ' .header .title').html('PROJECTS');
					$('#'+container_id+ ' .header .description').html('Select a project to explore.');
					$('#'+container_id + ' .content .type').removeClass('fliper');
				break;
				case 'btn_02':
					$('#'+container_id+ ' .content').removeClass('class_1','class_3','class_4');
					$('#'+container_id+ ' .header .icon').removeClass('icon_01 icon_03 icon_04');
					$('#'+container_id+ ' .header .icon').addClass('icon_02');
					$('#'+container_id+ ' .content').addClass('class_2');
					$('#'+container_id+ ' .header .title').html('PRoducts');
					$('#'+container_id+ ' .header .description').html('Select a product to explore.');
					$('#'+container_id + ' .content .type').removeClass('fliper');
				break;	
				case 'btn_03':
					$('#'+container_id+ ' .content').removeClass('class_2','class_1','class_4');
					$('#'+container_id+ ' .header .icon').removeClass('icon_02 icon_01 icon_04');
					$('#'+container_id+ ' .header .icon').addClass('icon_03');
					$('#'+container_id+ ' .content').addClass('class_3');
					$('#'+container_id+ ' .header .title').html('Companies');
					$('#'+container_id+ ' .header .description').html('Select a company to explore.');
					$('#'+container_id + ' .content .type').removeClass('fliper');
				break;	
				case 'btn_04':
					$('#'+container_id+ ' .content').removeClass('class_2','class_3','class_1');
					$('#'+container_id+ ' .header .icon').removeClass('icon_02 icon_03 icon_01');
					$('#'+container_id+ ' .content').addClass('class_4');
					$('#'+container_id+ ' .header .icon').addClass('icon_04');
					$('#'+container_id+ ' .header .title').html('Connect');
					$('#'+container_id+ ' .header .description').html('Please enter your details, and we will get in touch with you.');
					$('#'+container_id + ' .content .type').removeClass('fliper');
				break;		
			}
			}
			else
			{
				switch(button_id){
					case 'btn_01':
						if($('#'+container_id+ ' .content').hasClass('class_1')){
							if($('#'+container_id+ ' .content').hasClass('phase_2')){
								$('#'+container_id+ ' .content').addClass('phase_2_remove');
								$('#'+container_id+ ' .content').removeClass('phase_2');
								setTimeout(function(){
									$('#'+container_id+ ' .content').removeClass('phase_2_remove');
									$('#'+container_id+ ' .header .title').html('PROJECTS');
									$('#'+container_id+ ' .header .description').html('Select a project to explore.');
								},700);
							}else
							{
							$('#'+container_id+ ' .content').addClass('closing');
							setTimeout(function(){
								$('#'+container_id+' .products_content').scrollLeft(0);
								$('#'+container_id+' .projects_content').scrollLeft(0);
								$('#'+container_id+' .company_content ').scrollLeft(0);
								$('#'+container_id + ' .content .type').removeClass('fliper');
								$('#'+container_id+ ' .content').removeClass('open');
								$('#'+container_id+ ' .content').removeClass('closing');
								$('#'+container_id+ ' .content').removeClass('class_1');
								$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
								if(!($('#bottom .content').hasClass('open'))&&!($('#top .content').hasClass('open'))){
									$('#hot_spots').animate({opacity:1},1000);
								}
							},1300);	
							}
						}
						else
						{
							$('#'+container_id+ ' .content').removeClass('class_4 class_2 class_3 phase_2');
							$('#'+container_id+ ' .content').addClass('closing');
							$('#'+container_id+ ' .header .icon').addClass("hiding");
							$('#'+container_id+ ' .header .title').addClass("hiding");
							$('#'+container_id+ ' .header .description').addClass("hiding");
							setTimeout(function(){
								$('#'+container_id + ' .content .type').removeClass('fliper');
								$('#'+container_id+ ' .content').removeClass('closing');
								$('#'+container_id+ ' .header .title').html("Projects");
								$('#'+container_id+ ' .header .title').removeClass("hiding");
								$('#'+container_id+ ' .header .description').html("Select a project to explore.");
								$('#'+container_id+ ' .header .description').removeClass("hiding");
								$('#'+container_id+ ' .header .icon').removeClass('icon_02 icon_03 icon_04');
								$('#'+container_id+ ' .header .icon').addClass('icon_01');
								$('#'+container_id+ ' .header .icon').removeClass("hiding");
								$('#'+container_id+ ' .content').addClass('class_1');
								$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
								
							},1690);	
						}
					break;
					case 'btn_02':
						
						if($('#'+container_id+ ' .content').hasClass('class_2')){
							if($('#'+container_id+ ' .content').hasClass('phase_2')){
								$('#'+container_id+ ' .content').addClass('phase_2_remove');
								$('#'+container_id+ ' .content').removeClass('phase_2');
								$('#'+container_id+ ' .header .icon').addClass("hiding");
								$('#'+container_id+ ' .header .title').addClass("hiding");
								$('#'+container_id+ ' .header .description').addClass("hiding");
								setTimeout(function(){
									$('#'+container_id+ ' .content').removeClass('phase_2_remove');
									$('#'+container_id+ ' .header .title').html("Products");
									$('#'+container_id+ ' .header .description').html("Select a product to explore.");
								},700);
							}else
							{
							$('#'+container_id+ ' .content').addClass('closing');
							setTimeout(function(){
								$('#'+container_id + ' .content .type').removeClass('fliper');
								$('#'+container_id+ ' .content').removeClass('open');
								if(!($('#bottom .content').hasClass('open'))&&!($('#top .content').hasClass('open'))){
									$('#hot_spots').animate({opacity:1},1000);
								}
								$('#'+container_id+ ' .content').removeClass('closing');
								$('#'+container_id+ ' .content').removeClass('class_2');
								$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
							},1300);	
							}
						}
						else
						{
							$('#'+container_id+ ' .content').removeClass('class_1 class_4 class_3 phase_2');
							$('#'+container_id+ ' .content').addClass('closing');
							$('#'+container_id+ ' .header .icon').addClass("hiding");
							$('#'+container_id+ ' .header .title').addClass("hiding");
							$('#'+container_id+ ' .header .description').addClass("hiding");
							setTimeout(function(){
								$('#'+container_id + ' .content .type').removeClass('fliper');
								$('#'+container_id+ ' .content').removeClass('closing');
								$('#'+container_id+ ' .header .title').html("Products");
								$('#'+container_id+ ' .header .title').removeClass("hiding");
								$('#'+container_id+ ' .header .description').html("Select a product to explore.");
								$('#'+container_id+ ' .header .description').removeClass("hiding");
								$('#'+container_id+ ' .header .icon').removeClass('icon_01 icon_03 icon_04');
								$('#'+container_id+ ' .header .icon').addClass('icon_02');
								$('#'+container_id+ ' .header .icon').removeClass("hiding");
								$('#'+container_id+ ' .content').addClass('class_2');
								$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
							},1690);	
						}
					break;
					case 'btn_03':
						if($('#'+container_id+ ' .content').hasClass('class_3')){
							if($('#'+container_id+ ' .content').hasClass('phase_2')){
								$('#'+container_id+ ' .content').addClass('phase_2_remove');
								$('#'+container_id+ ' .content').removeClass('phase_2');
								$('#'+container_id+ ' .header .icon').addClass("hiding");
								$('#'+container_id+ ' .header .title').addClass("hiding");
								$('#'+container_id+ ' .header .description').addClass("hiding");
								setTimeout(function(){
									$('#'+container_id+ ' .content').removeClass('phase_2_remove');
								$('#'+container_id+ ' .header .title').html("Companies");
								$('#'+container_id+ ' .header .description').html("Select a company to explore.");
								},700);
							}else
							{
							$('#'+container_id+ ' .content').addClass('closing');
							setTimeout(function(){
								$('#'+container_id + ' .content .type').removeClass('fliper');
								$('#'+container_id+ ' .content').removeClass('open');
								if(!($('#bottom .content').hasClass('open'))&&!($('#top .content').hasClass('open'))){
									$('#hot_spots').animate({opacity:1},1000);
								}
								$('#'+container_id+ ' .content').removeClass('closing');
								$('#'+container_id+ ' .content').removeClass('class_3');
								$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
							},1300);	
							}
						}
						else
						{
							$('#'+container_id+ ' .content').removeClass('class_1 class_2 class_4 phase_2');
							$('#'+container_id+ ' .content').addClass('closing');
							$('#'+container_id+ ' .header .icon').addClass("hiding");
							$('#'+container_id+ ' .header .title').addClass("hiding");
							$('#'+container_id+ ' .header .description').addClass("hiding");
							setTimeout(function(){
								$('#'+container_id + ' .content .type').removeClass('fliper');
								$('#'+container_id+ ' .content').removeClass('closing');
								$('#'+container_id+ ' .header .title').html("Companies");
								$('#'+container_id+ ' .header .title').removeClass("hiding");
								$('#'+container_id+ ' .header .description').html("Select a company to explore.");
								$('#'+container_id+ ' .header .description').removeClass("hiding");
								$('#'+container_id+ ' .header .icon').removeClass('icon_01 icon_02 icon_04');
								$('#'+container_id+ ' .header .icon').addClass('icon_03');
								$('#'+container_id+ ' .header .icon').removeClass("hiding");
								$('#'+container_id+ ' .content').addClass('class_3');
								$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
							},1690);	
						}
					break;
					case 'btn_04':
					
						if($('#'+container_id+ ' .content').hasClass('class_4')){
							if($('#'+container_id+ ' .content').hasClass('phase_2')){
								$('#'+container_id+ ' .content').addClass('phase_2_remove');
								$('#'+container_id+ ' .content').removeClass('phase_2');
								setTimeout(function(){
									$('#'+container_id+ ' .content').removeClass('phase_2_remove');
								},700);
							}else
							{
							$('#'+container_id+ ' .content').addClass('closing');
							setTimeout(function(){
								$('#'+container_id + ' .content .type').removeClass('fliper');
								$('#'+container_id+ ' .content').removeClass('open');
								if(!($('#bottom .content').hasClass('open'))&&!($('#top .content').hasClass('open'))){
									$('#hot_spots').animate({opacity:1},1000);
								}
								$('#'+container_id+ ' .content').removeClass('closing');
								$('#'+container_id+ ' .content').removeClass('class_4');
								$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
							},1300);
							}
						}
						else
						{
							
							$('#'+container_id+ ' .content').removeClass('class_1 class_2 class_3 phase_2');
								$('#'+container_id+ ' .content').removeClass('showing');
							$('#'+container_id+ ' .content').addClass('closing');
							$('#'+container_id+ ' .header .icon').addClass("hiding");
							$('#'+container_id+ ' .header .title').addClass("hiding");
							$('#'+container_id+ ' .header .description').addClass("hiding");
							setTimeout(function(){
								$('#'+container_id + ' .content .type').removeClass('fliper');
								$('#'+container_id+ ' .header .icon').addClass("showing");
								$('#'+container_id+ ' .content').removeClass('closing');
								$('#'+container_id+ ' .header .title').html("Contact");
								$('#'+container_id+ ' .header .title').removeClass("hiding");
								$('#'+container_id+ ' .header .description').removeClass("hiding");
								$('#'+container_id+ ' .header .description').html("Please fill in your information so that we can contact you.");
								$('#'+container_id+ ' .header .icon').removeClass('icon_01 icon_03 icon_03');
								$('#'+container_id+ ' .header .icon').addClass('icon_04');
								$('#'+container_id+ ' .header .icon').removeClass("hiding");
								$('#'+container_id+ ' .content').addClass('class_4');
								$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
							},1690);	
						}
						
					break;
				}
				
			}
			if($('#bottom .content').hasClass('open')||$('#top .content').hasClass('open')){
									$('#hot_spots').animate({opacity:0},1000);
								}
		
		else{
			
			$('#'+container_id+ ' .content').removeClass('phase_2');
		}
		}
	);
	$('.spot').click(function(e){
			item_type = '1';
			$('#hot_spots').animate({opacity:0},1000);
			var p = $(this).attr('value');
			var container_id = 'bottom';
				
			$('#'+container_id+ ' .content').addClass('open');
			$('#'+container_id+' .content').addClass('phase_2');
			$('#'+container_id+ ' .content').addClass('class_1');
			$('#'+container_id+ ' .header .icon').addClass('icon_01');
			var pin = p;
			$('#'+container_id+' .header .title').html(projects_array[pin]['name']);
			$('#'+container_id+' .header .description').html(projects_array[pin]['description']);
			$('#'+container_id+' .item_viewer .col_01 h3').html('Scope of work');
			var splitting = projects_array[pin]['scope'];
			var features = splitting.split(';');

			var features_string = '-'+features[0] + ' <br/>';
			for(var x = 1; x < features.length; x++){
					features_string =  features_string +'-'+features[x] + ' <br/>';
			}

			$('#'+container_id+' .item_viewer .col_01 p').html(features_string);
			$('#'+container_id+' .item_viewer .col_02 h3').html('Project info');
			$('#'+container_id+' .item_viewer .col_02 p').html(projects_array[pin]['info']);

			$('#'+container_id+' .item_viewer .phase_2_image_01').attr('src','projects/'+projects_array[pin]['images'][0]);
			$('#'+container_id+' .item_viewer .phase_2_image_02').attr('src','projects/'+projects_array[pin]['images'][1]);
			$('#'+container_id+' .item_viewer .phase_2_image_03').attr('src','projects/'+projects_array[pin]['images'][2]);
			$('#'+container_id+' .item_viewer .phase_2_image_04').attr('src','projects/'+projects_array[pin]['images'][3]);
			$('#'+container_id+' .item_viewer .phase_2_image_05').attr('src','projects/'+projects_array[pin]['images'][4]);
		});
	$('.clear_form').click(function(e){
			var parent_form = $(this).parent().parent().attr('id');
			$('#'+parent_form).find( "input[type=text],input[type=email]" ).css( "background-color", "red" )
			$('#'+parent_form).find("input[type=checkbox]").removeAttr('checked').removeAttr('selected');
		});
		
	
	
	
		
		
	$('.arrow_right').click(function(){
		var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
		var left_scroll = $(this).siblings('.contenter').scrollLeft();
		var cal_01 = left_scroll / 550;
		var cal_02 = cal_01 - Math.floor(cal_01);
		left_scroll = 550 + (Math.floor(cal_01))*550;
		$(this).siblings('.contenter').stop().animate({scrollLeft: left_scroll	}, 300);	
	
	});
	$('.arrow_left').click(function(){
		var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
		var left_scroll = $(this).siblings('.contenter').scrollLeft();
		var cal_01 = left_scroll / 550;
		var cal_02 = cal_01 - Math.floor(cal_01);
		left_scroll = ((Math.floor(cal_01))*550)-550;
		$(this).siblings('.contenter').stop().animate({scrollLeft: left_scroll	}, 300);	
	
	});
	
	$('.back').click(function(){
		var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
		switch(item_type){
			case "1":
				$('#'+container_id+ ' .content').removeClass('class_4 class_2 class_3');
				$('#'+container_id+ ' .content').addClass('closing');
				$('#'+container_id+ ' .header .icon').addClass("hiding");
				$('#'+container_id+ ' .header .title').addClass("hiding");
				$('#'+container_id+ ' .header .description').addClass("hiding");
				setTimeout(function(){
					$('#'+container_id + ' .content .type').removeClass('fliper');
					$('#'+container_id+ ' .content').removeClass('closing');
					$('#'+container_id+ ' .header .title').html("Projects");
					$('#'+container_id+ ' .header .title').removeClass("hiding");
					$('#'+container_id+ ' .header .description').html("Select a project to explore.");
					$('#'+container_id+ ' .header .description').removeClass("hiding");
					$('#'+container_id+ ' .header .icon').removeClass('icon_02 icon_03 icon_04');
					$('#'+container_id+ ' .header .icon').addClass('icon_01');
					$('#'+container_id+ ' .header .icon').removeClass("hiding");
					$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
				},1690);
			break;
			case "2":
								$('#'+container_id+ ' .content').removeClass('class_4 class_1 class_3');
				$('#'+container_id+ ' .content').addClass('closing');
				$('#'+container_id+ ' .header .icon').addClass("hiding");
				$('#'+container_id+ ' .header .title').addClass("hiding");
				$('#'+container_id+ ' .header .description').addClass("hiding");
				setTimeout(function(){
					$('#'+container_id + ' .content .type').removeClass('fliper');
					$('#'+container_id+ ' .content').removeClass('closing');
					$('#'+container_id+ ' .header .title').html("Products");
					$('#'+container_id+ ' .header .title').removeClass("hiding");
					$('#'+container_id+ ' .header .description').html("Select a project to explore.");
					$('#'+container_id+ ' .header .description').removeClass("hiding");
					$('#'+container_id+ ' .header .icon').removeClass('icon_01 icon_03 icon_04');
					$('#'+container_id+ ' .header .icon').addClass('icon_02');
					$('#'+container_id+ ' .header .icon').removeClass("hiding");
					$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
				},1690);
			break;	
			case "3":
				$('#'+container_id+ ' .content').removeClass('class_4 class_2 class_1');
				$('#'+container_id+ ' .content').addClass('closing');
				$('#'+container_id+ ' .header .icon').addClass("hiding");
				$('#'+container_id+ ' .header .title').addClass("hiding");
				$('#'+container_id+ ' .header .description').addClass("hiding");
				setTimeout(function(){
					$('#'+container_id + ' .content .type').removeClass('fliper');
					$('#'+container_id+ ' .content').removeClass('closing');
					$('#'+container_id+ ' .header .title').html("Comapnies");
					$('#'+container_id+ ' .header .title').removeClass("hiding");
					$('#'+container_id+ ' .header .description').html("Select a company to explore.");
					$('#'+container_id+ ' .header .description').removeClass("hiding");
					$('#'+container_id+ ' .header .icon').removeClass('icon_02 icon_01 icon_04');
					$('#'+container_id+ ' .header .icon').addClass('icon_03');
					$('#'+container_id+ ' .header .icon').removeClass("hiding");
					$('#'+container_id+' .products_content').scrollLeft(0);
			$('#'+container_id+' .projects_content').scrollLeft(0);
			$('#'+container_id+' .company_content ').scrollLeft(0);
				},1690);

			break;	
		}
		console.log($('#'+container_id+ ' .content'));
		if($('#'+container_id+ ' .content').hasClass('phase_2')){
			$('#'+container_id+ ' .content').addClass('phase_2_remove');
			$('#'+container_id+ ' .content').removeClass('phase_2');
			setTimeout(function(){
				$('#'+container_id+ ' .content').removeClass('phase_2_remove');
			},400);
		}
		});
	$('.product_item , .project_item , .company_item').click(function(){
			var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
			$('#'+container_id+' .content').addClass('phase_2');
			var name = $(this).attr('value');
			var splitter = name.split('_');
			var iItem = parseInt(splitter[1]) - 1;
			prev_title = $('#'+container_id+' .header .title').html();
			prev_descption = $('#'+container_id+' .header .description').html();
			switch(splitter[0]){
				case 'pjt':
					item_type = '1';
					var pin = iItem;
					$('#'+container_id+' .header .title').html(projects_array[pin]['name']);
					$('#'+container_id+' .header .description').html(projects_array[pin]['description']);
					$('#'+container_id+' .item_viewer .col_01 h3').html('Scope of work');
					var splitting = projects_array[pin]['scope'];
					var features = splitting.split(';');

					var features_string = '-'+features[0] + ' <br/>';
					for(var x = 1; x < features.length; x++){
							features_string =  features_string +'-'+features[x] + ' <br/>';
					}

					$('#'+container_id+' .item_viewer .col_01 p').html(features_string);
					$('#'+container_id+' .item_viewer .col_02 h3').html('Project info');
					$('#'+container_id+' .item_viewer .col_02 p').html(projects_array[pin]['info']);

					$('#'+container_id+' .item_viewer .phase_2_image').attr('src','projects/'+projects_array[pin]['images'][0]);
					$('#'+container_id+' .item_viewer .image_container .phase_2_image_01').attr('src','projects/'+projects_array[pin]['images'][0]);
					$('#'+container_id+' .item_viewer .image_container .phase_2_image_02').attr('src','projects/'+projects_array[pin]['images'][1]);
					$('#'+container_id+' .item_viewer .image_container .phase_2_image_03').attr('src','projects/'+projects_array[pin]['images'][2]);
					$('#'+container_id+' .item_viewer .image_container .phase_2_image_04').attr('src','projects/'+projects_array[pin]['images'][3]);
					$('#'+container_id+' .item_viewer .image_container .phase_2_image_05').attr('src','projects/'+projects_array[pin]['images'][4]);
				break;
				case 'pdc':
					item_type = '2';
					var pin = iItem;
					$('#'+container_id+' .header .title').html(products_array[pin]['name']);
					$('#'+container_id+' .header .description').html(products_array[pin]['description']);
					$('#'+container_id+' .item_viewer .col_01 h3').html('Product Specs');
					var splitting = products_array[pin]['info'];

					var features = splitting.split(';');
					var features_string = '-'+features[0] + ' <br/>';
					for(var x = 1; x < features.length; x++){
							features_string =  features_string +'-'+features[x] + ' <br/>';
					}
					$('#'+container_id+' .item_viewer video').attr('src','videos/'+products_array[pin]['video']);
					$('#'+container_id+' .item_viewer .col_01 p').html(features_string);
					$('#'+container_id+' .item_viewer .col_02 h3').html('Product Info');
					$('#'+container_id+' .item_viewer .col_02 p').html(products_array[pin]['info']);
				break;
				case 'cmp':
					item_type = '3';
					var pin = iItem;
					$('#'+container_id+' .header .title').html(company_array[pin]['name']);
					$('#'+container_id+' .header .description').html(company_array[pin]['description']);
					$('#'+container_id+' .item_viewer .col_01 h3').html('Company Information');
					var splitting = company_array[pin]['info'];
					var features = splitting.split(';');

					var features_string = '-'+features[0] + ' <br/>';
					for(var x = 1; x < features.length; x++){
							features_string =  features_string +'-'+features[x] + ' <br/>';
					}
					$('#'+container_id+' .item_viewer .col_01 p').html(features_string);
					$('#'+container_id+' .item_viewer .col_02 h3').html('Company Profile');
					$('#'+container_id+' .item_viewer .col_02 p').html(company_array[pin]['profile']);
					$('#'+container_id+' .item_viewer .phase_2_image_01').attr('src','companies/'+company_array[pin]['images'][0]);
					$('#'+container_id+' .item_viewer .phase_2_image_01').attr('src','companies/'+company_array[pin]['images'][1]);
					$('#'+container_id+' .item_viewer .phase_2_image_02').attr('src','companies/'+company_array[pin]['images'][2]);
					$('#'+container_id+' .item_viewer .phase_2_image_03').attr('src','companies/'+company_array[pin]['images'][3]);
					$('#'+container_id+' .item_viewer .phase_2_image_04').attr('src','companies/'+company_array[pin]['images'][4]);
					$('#'+container_id+' .item_viewer .image_selector .image_01').attr('value','companies/'+company_array[pin]['images'][0]);
					$('#'+container_id+' .item_viewer .image_selector .image_02').attr('value','companies/'+company_array[pin]['images'][1]);
					$('#'+container_id+' .item_viewer .image_selector .image_03').attr('value','companies/'+company_array[pin]['images'][2]);
					$('#'+container_id+' .item_viewer .image_selector .image_04').attr('value','companies/'+company_array[pin]['images'][3]);
					$('#'+container_id+' .item_viewer .image_selector .image_05').attr('value','companies/'+company_array[pin]['images'][4]);
				break;
				
			}
		});
	$('.image_selector span').click(function(){
			var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
			var scrol_left = $(this).index()*568;
			$(this).parentsUntil('.image_viewer').siblings('.img_holder').stop().animate({scrollLeft: scrol_left	}, 1000);
			$('.image_selector .selected').removeClass('selected');
			$(this).addClass('selected');
		});
	
	$('.img_next').click(function(){
		var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
		var left_scroll = $(this).siblings('.img_holder').scrollLeft();
		var cal_01 = left_scroll / 568;
		var cal_02 = cal_01 - Math.floor(cal_01);
		left_scroll = ((Math.floor(cal_01))*568)+568;
		$(this).siblings('.img_holder').stop().animate({scrollLeft: left_scroll	}, 300);	
		var count = $(this).siblings('.image_selector').children().length;
		var pos = $(this).siblings('.image_selector').children('.selected').index() ;
		if(pos + 1 != count){
			$(this).siblings('.image_selector').children('.selected').removeClass('selected');
			$(this).siblings('.image_selector').children().eq(pos+1).addClass('selected');
		}
		
	});
	$('.img_prev').click(function(){
		var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
		var left_scroll = $(this).siblings('.img_holder').scrollLeft();
		var cal_01 = left_scroll / 568;
		var cal_02 = cal_01 - Math.floor(cal_01);
		left_scroll = ((Math.floor(cal_01))*568)-568;
		$(this).siblings('.img_holder').stop().animate({scrollLeft: left_scroll	}, 300);	
		var count = 1;
		var pos = $(this).siblings('.image_selector').children('.selected').index();
		if(pos+1 != count){
			$(this).siblings('.image_selector').children('.selected').removeClass('selected');
			$(this).siblings('.image_selector').children().eq(pos-1).addClass('selected');
		}
	});
	var scroll_time = new Array;
	$('.company_content').scroll(
		function(data){
			
			var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
			clearTimeout(scroll_time[container_id]);
			element = $('#'+container_id+' .company_content').offset();
			scroll_time[container_id] = setTimeout(function(){
				var left_scroll = $('#'+container_id+' .company_content').scrollLeft();
				var cal_01 = left_scroll / 550;
				var cal_02 = cal_01 - Math.floor(cal_01);
				var cal_03 = 0;
				if(prev_scroll < left_scroll){
					if(cal_02 > 0.25){
					cal_03 = 1;
						
					}
					else
					{
					cal_03 = 0;	
					}
				}
				else
				if(prev_scroll > left_scroll){
					if(cal_02 < 0.25){
					cal_03 = 0;
						
					}
					else
					{
					cal_03 = 1;	
					}
				}
				left_scroll = (Math.floor(cal_01) + cal_03)*550;
			$('#'+container_id+' .company_content').stop().animate({scrollLeft: left_scroll}, 300);
			prev_scroll = $('#'+container_id+' .company_content').scrollLeft();
				}, 100);
			
		});
	$('.projects_content').scroll(
		function(data){
			
			var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
			clearTimeout(scroll_time[container_id]);
			element = $('#'+container_id+' .projects_content').offset();
			scroll_time[container_id] = setTimeout(function(){
				var left_scroll = $('#'+container_id+' .projects_content').scrollLeft();
				var cal_01 = left_scroll / 550;
				var cal_02 = cal_01 - Math.floor(cal_01);
				var cal_03 = 0;
				if(prev_scroll < left_scroll){
					if(cal_02 > 0.25){
					cal_03 = 1;
						
					}
					else
					{
					cal_03 = 0;	
					}
				}
				else
				if(prev_scroll > left_scroll){
					
				}
				left_scroll = (Math.floor(cal_01) + cal_03)*550;
			$('#'+container_id+' .projects_content').stop().animate({scrollLeft: left_scroll}, 300);
				}, 100);
		});
	$('.products_content').scroll(
		function(data){
			
			var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
			clearTimeout(scroll_time[container_id]);
			element = $('#'+container_id+' .products_content').offset();
			scroll_time[container_id] = setTimeout(function(){
				var left_scroll = $('#'+container_id+' .products_content').scrollLeft();
				var cal_01 = left_scroll / 550;
				var cal_02 = cal_01 - Math.floor(cal_01);
				var cal_03 = 0;
				if(prev_scroll < left_scroll){
					if(cal_02 > 0.25){
					cal_03 = 1;
						
					}
					else
					{
					cal_03 = 0;	
					}
				}
				else
				if(prev_scroll > left_scroll){
					
				}
				left_scroll = (Math.floor(cal_01) + cal_03)*550;
			$('#'+container_id+' .products_content').stop().animate({scrollLeft: left_scroll}, 300);
				}, 100);
		});
	$('.img_holder').scroll(
		function(data){
			
			var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
			clearTimeout(scroll_time[container_id]);
			var left_scroll;
			element = $('#'+container_id+' .img_holder').offset();
			scroll_time[container_id] = setTimeout(function(){
				left_scroll = $('#'+container_id+' .img_holder').scrollLeft();

				var cal_01 = left_scroll / 568;
				var cal_02 = cal_01 - Math.floor(cal_01);
				var cal_03 = (Math.floor(cal_01) + Math.round(cal_02));
				left_scroll = cal_03*568;
				var pos = $(this).siblings('.image_selector').children('.selected').index() ;
				$('#'+container_id+' .image_selector').children('.selected').removeClass('selected');
				$('#'+container_id+' .image_selector').children().eq(cal_03).addClass('selected');
			$('#'+container_id+' .img_holder').stop().animate({scrollLeft: left_scroll}, 300);
				}, 100);
				
		
		});
	
	$('.product_selects label').click(function(){
			$(this).prev().prop("checked", !$(this).prev().prop("checked"));		
			});
			
	$('.vid_pos').mousedown( function(ev) {
				var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
		var e = ev.originalEvent;
		touch_start[0] = ev.clientX;
		touch_start[1] = ev.clientY;
		touch_down = true;
		var vid = document.getElementById('vid_'+container_id);
		vid.pause();		
		
	});
	
	$('.vid_container video').click(function(){
				var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');

			if(vid_play_state[container_id] == 'play'){
				vid_play_state[container_id] = 'pause';
				this.pause();
				}
				else
				{
					vid_play_state[container_id] = 'play';
				this.play();
				}
		});
	$('.clear_form').click(function(){
		var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
		$('#'+container_id+' .customer_name_01').val('');
		$('#'+container_id+' .customer_surname_01').val('');
		$('#'+container_id+' .customer_company_01').val('');
		$('#'+container_id+' .customer_country_01').val('');
		$('#'+container_id+' .customer_number_01').val('');
		$('#'+container_id+' .customer_email_01').val('');
		$('#'+container_id+' .select_01_product_01').removeAttr("checked");
		$('#'+container_id+' .select_01_product_02').removeAttr("checked");
		$('#'+container_id+' .select_01_product_03').removeAttr("checked");
		$('#'+container_id+' .select_01_product_04').removeAttr("checked");
		$('#'+container_id+' .select_01_product_05').removeAttr("checked");
		$('#'+container_id+' .select_01_product_06').removeAttr("checked");
		$('#'+container_id+' .select_01_product_07').removeAttr("checked");
		$('#'+container_id+' .select_01_product_08').removeAttr("checked");

	});
	$('.form_submit').click(function(){	
		var insert_check = true;
		var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
		var i_name = '';
		var i_surname = '';
		var i_company = '';
		var i_country = '';
		var i_number = '';
		var i_email = '';
		var i_products = '';
		i_name = $('#'+container_id+' .customer_name_01').val();
		i_surname = $('#'+container_id+' .customer_surname_01').val();
		i_company = $('#'+container_id+' .customer_company_01').val();
		i_country = $('#'+container_id+' .customer_country_01').val();
		i_number = $('#'+container_id+' .customer_number_01').val();
		i_email = $('#'+container_id+' .customer_email_01').val();
		if( i_name == '')insert_check = false;
		if( i_surname == '')insert_check = false;
		if( i_company == '')insert_check = false;
		if( i_country == '')insert_check = false;
		if( i_number == '')insert_check = false;
		if( i_email == '')insert_check = false;

		if($('#'+container_id+' .select_01_product_01').attr("checked") == "checked"){
			i_products = i_products + 'ENI ,';
		}
		if($('#'+container_id+' .select_01_product_02').attr("checked") == "checked"){
			i_products = i_products +'Generator Set Division ,';
		}
		if($('#'+container_id+' .select_01_product_03').attr("checked") == "checked"){
			i_products = i_products +'Shaw Controls ,';
		}
		if($('#'+container_id+' .select_01_product_04').attr("checked") == "checked"){
			i_products = i_products +'Zest Electric Motors ,';
		}
		if($('#'+container_id+' .select_01_product_05').attr("checked") == "checked"){
			i_products = i_products +'Zest Energy ,';
		}
		if($('#'+container_id+' .select_01_product_06').attr("checked") == "checked"){
			i_products = i_products +'Zest Ghana';
		}
		
		console.log(i_products);
		if(insert_check){
			zest_db.webdb.addClient(i_name,i_surname,i_company,i_country,i_number,i_email,i_products);
			$('#'+container_id+' .inform').html("Thank you for your Intrest");
			$('#'+container_id+' .inform').addClass('show');
		}
		else{
			$('#'+container_id+' .inform').html("Please fill in all your information");
			$('#'+container_id+' .inform').addClass('show');
		}
	});
});
