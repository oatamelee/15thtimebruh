import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Leaf, Zap, Wrench } from "lucide-react";

const ScienceTabs = () => {
  const [activeTab, setActiveTab] = useState("concept");

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <Tabs
        defaultValue="concept"
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
          <TabsTrigger value="concept">The Concept</TabsTrigger>
          <TabsTrigger value="nanowires">Protein Nanowires</TabsTrigger>
          <TabsTrigger value="process">The Process</TabsTrigger>
          <TabsTrigger value="research">Current Research</TabsTrigger>
        </TabsList>

        <TabsContent value="concept" className="p-6 bg-gray-50 rounded-b-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Harvesting Ambient Humidity
              </h3>
              <p className="mb-4">
                The Earth's atmospheric column generates atmospheric electricity
                through numerous electrostatic interactions which lead to charge
                transfers. Thunderstorms and lightning represent large-scale
                charge separations but water vapor nanomolecules with polar
                dipole moments interact with certain materials to cause charge
                displacement at the nanoscale.
              </p>
              <p className="mb-4">
                Our technology leverages this fundamental principle:
                adsorption-induced charge polarization. Specially engineered
                nanomaterials develop spatially asymmetric charge distributions
                because water vapor adsorption creates electric dipole
                interactions together with electrochemical surface potential
                differences.
              </p>
              <p className="mb-4">
                Electron flow happens continuously because of chemical potential
                gradients which results in the transformation of ambient
                humidity into direct current (DC).
              </p>
            </div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="w-full h-auto rounded-lg shadow-lg"
                width="600"
                height="400"
                viewBox="0 0 600 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="600" height="400" fill="#F0F4F8" rx="10" />

                {/* Sky */}
                <rect width="600" height="250" fill="#1a73e8" opacity="0.2" />

                {/* Sun */}
                <circle cx="500" cy="80" r="40" fill="#FFEB3B" opacity="0.8" />

                {/* Clouds with water molecules */}
                <g opacity="0.8">
                  <ellipse cx="150" cy="100" rx="60" ry="40" fill="white" />
                  <ellipse cx="200" cy="90" rx="70" ry="50" fill="white" />
                  <ellipse cx="250" cy="110" rx="50" ry="30" fill="white" />

                  {/* H2O molecules */}
                  <circle cx="180" cy="95" r="5" fill="#1a73e8" />
                  <circle cx="170" cy="85" r="3" fill="#1a73e8" />
                  <circle cx="190" cy="105" r="4" fill="#1a73e8" />
                  <circle cx="220" cy="95" r="5" fill="#1a73e8" />
                  <circle cx="240" cy="100" r="3" fill="#1a73e8" />
                </g>

                <g opacity="0.8">
                  <ellipse cx="400" cy="120" rx="80" ry="40" fill="white" />
                  <ellipse cx="450" cy="110" rx="60" ry="50" fill="white" />

                  {/* H2O molecules */}
                  <circle cx="420" cy="115" r="5" fill="#1a73e8" />
                  <circle cx="440" cy="125" r="4" fill="#1a73e8" />
                  <circle cx="400" cy="110" r="3" fill="#1a73e8" />
                  <circle cx="460" cy="105" r="4" fill="#1a73e8" />
                </g>

                {/* Ground */}
                <rect
                  y="250"
                  width="600"
                  height="150"
                  fill="#34A853"
                  opacity="0.2"
                />

                {/* Device */}
                <rect
                  x="250"
                  y="260"
                  width="100"
                  height="120"
                  rx="5"
                  fill="#FFFFFF"
                  stroke="#666"
                  strokeWidth="2"
                />

                {/* Solar panel look */}
                <rect
                  x="260"
                  y="270"
                  width="80"
                  height="30"
                  fill="#1a73e8"
                  opacity="0.5"
                />

                {/* Nanowire array representation */}
                <rect
                  x="260"
                  y="310"
                  width="80"
                  height="60"
                  fill="#34A853"
                  opacity="0.3"
                />
                <line
                  x1="270"
                  y1="310"
                  x2="270"
                  y2="370"
                  stroke="#34A853"
                  strokeWidth="2"
                />
                <line
                  x1="290"
                  y1="310"
                  x2="290"
                  y2="370"
                  stroke="#34A853"
                  strokeWidth="2"
                />
                <line
                  x1="310"
                  y1="310"
                  x2="310"
                  y2="370"
                  stroke="#34A853"
                  strokeWidth="2"
                />
                <line
                  x1="330"
                  y1="310"
                  x2="330"
                  y2="370"
                  stroke="#34A853"
                  strokeWidth="2"
                />

                {/* Water molecules being absorbed */}
                <circle cx="150" cy="180" r="5" fill="#1a73e8">
                  <animate
                    attributeName="cx"
                    from="150"
                    to="270"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from="180"
                    to="340"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle cx="400" cy="200" r="4" fill="#1a73e8">
                  <animate
                    attributeName="cx"
                    from="400"
                    to="310"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from="200"
                    to="330"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle cx="300" cy="150" r="6" fill="#1a73e8">
                  <animate
                    attributeName="cx"
                    from="300"
                    to="290"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from="150"
                    to="350"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Electricity output */}
                <path
                  d="M350 320 L 380 320 L 365 330 L 380 330 L 365 345"
                  stroke="#FFEB3B"
                  strokeWidth="3"
                  fill="none"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </motion.div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Mathematical Model
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="font-mono text-center text-2xl mb-4">
                  ΔV = ∫<sub>0</sub>
                  <sup>L</sup> E(x) dx
                </p>
                <p>
                  ΔV is the voltage generated across the nanowire film, E(x) is
                  the electric field at position x along the layer (varying due
                  to water molecule adsorption), L is the film length.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3">
                  Practical Applications
                </h4>
                <p className="mb-3">
                  This mathematical model helps us predict the voltage output
                  based on:
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li>Film thickness and composition</li>
                  <li>Humidity levels in the environment</li>
                  <li>Temperature variations</li>
                  <li>Surface area optimization</li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="nanowires" className="p-6 bg-gray-50 rounded-b-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Protein Nanowire Technology
              </h3>
              <p className="mb-4">
                The central operational principle of this system depends on
                Geobacter sulfurreducens generating electrogenic protein
                nanowires. The main protein components of nanowires are PilA
                monomers that enable electron transport through aromatic side
                chain resonance and electron cloud distribution. The
                bioengineered system has two operational facets which serve as
                both electricity conductors and moisture receivers.
              </p>

              <div className="bg-white p-5 rounded-lg shadow-sm mb-5">
                <h4 className="font-bold text-lg mb-3">
                  Structural & Electronic Features:
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    The nanowire features a 3 nm diameter and grows to tens of
                    microseconds in length.
                  </li>
                  <li>
                    High surface area-to-volume ratio facilitates maximal
                    interaction with air moisture.
                  </li>
                  <li>
                    The electron transfer mechanism includes quantum tunneling
                    in addition to thermally assisted hopping.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm mb-5">
                <h4 className="font-bold text-lg mb-3">
                  Electron Transfer Mechanism:
                </h4>
                <p className="mb-3">
                  Nanowire electron transfer happens through multi-step
                  tunneling supported by aromatic amino acid residues (such as
                  tryptophan and tyrosine) that establish overlapping
                  π-orbitals.
                </p>
                <div className="font-mono text-center my-4 text-lg">
                  e<sub>donor</sub>
                  <sup>−</sup> → π<sub>residue</sub> → e<sub>acceptor</sub>
                  <sup>−</sup>
                </div>
                <p>
                  This bio-conduction benefits from adsorbed water molecules
                  that control dielectric constants near the local area and
                  decrease activation energy barriers.
                </p>
              </div>
            </div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="w-full h-auto rounded-lg shadow-lg"
                viewBox="0 0 600 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="600" height="400" rx="10" fill="#F8F9FA" />

                {/* Microscope view circle */}
                <circle
                  cx="300"
                  cy="200"
                  r="180"
                  fill="#E3F2FD"
                  stroke="#90CAF9"
                  strokeWidth="10"
                />

                {/* Nanowire structures */}
                <g stroke="#1565C0" strokeWidth="3" fill="none">
                  <path d="M180,200 C200,150 220,250 240,200 C260,150 280,250 300,200 C320,150 340,250 360,200 C380,150 400,250 420,200" />
                  <path d="M160,230 C180,180 200,280 220,230 C240,180 260,280 280,230 C300,180 320,280 340,230 C360,180 380,280 400,230 C420,180 440,280 460,230" />
                  <path d="M200,170 C220,120 240,220 260,170 C280,120 300,220 320,170 C340,120 360,220 380,170" />
                </g>

                {/* Water molecules */}
                <g fill="#2196F3" opacity="0.7">
                  <circle cx="210" cy="190" r="5">
                    <animate
                      attributeName="cy"
                      values="190;185;190"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="250" cy="230" r="4">
                    <animate
                      attributeName="cy"
                      values="230;235;230"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="290" cy="180" r="6">
                    <animate
                      attributeName="cy"
                      values="180;175;180"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="330" cy="220" r="5">
                    <animate
                      attributeName="cy"
                      values="220;225;220"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="370" cy="190" r="4">
                    <animate
                      attributeName="cy"
                      values="190;185;190"
                      dur="2.7s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                {/* Electron flow */}
                <g fill="#FFEB3B">
                  <circle cx="220" cy="190" r="3">
                    <animate
                      attributeName="cx"
                      values="220;240;260;280;300;320;340;360;380;400"
                      dur="7s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values="190;200;190;200;190;200;190;200;190;200"
                      dur="7s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="190" cy="230" r="3">
                    <animate
                      attributeName="cx"
                      values="190;210;230;250;270;290;310;330;350;370;390;410;430;450"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values="230;230;230;230;230;230;230;230;230;230;230;230;230;230"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="250" cy="170" r="3">
                    <animate
                      attributeName="cx"
                      values="250;270;290;310;330;350;370"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values="170;170;170;170;170;170;170"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                {/* Labels */}
                <g fontFamily="sans-serif" fontSize="14" fontWeight="bold">
                  <text x="300" y="50" textAnchor="middle" fill="#1565C0">
                    Protein Nanowire Structure
                  </text>
                  <text x="140" y="120" textAnchor="middle" fill="#2196F3">
                    H₂O
                  </text>
                  <text x="460" y="120" textAnchor="middle" fill="#FFEB3B">
                    e⁻
                  </text>
                  <text x="180" y="350" textAnchor="middle" fill="#1565C0">
                    Conductive Nanowires
                  </text>
                  <text x="450" y="350" textAnchor="middle" fill="#2196F3">
                    Water Molecules
                  </text>
                </g>
              </svg>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="process" className="p-6 bg-gray-50 rounded-b-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">The Electricity Generation Process</h3>
              <p className="mb-4">
                The electricity generation process primarily hinges on the hygroelectric effect, a phenomenon where moisture gradients in the environment induce electric potential across a material.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg text-primary mb-2">1. Moisture Adsorption</h4>
                  <p className="text-sm text-gray-600 mb-2">Nanowire film captures water molecules from air (a<sub>w</sub>)</p>
                  <div className="bg-blue-50 p-2 rounded text-sm font-mono">∂C/∂t = D ∇²C</div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg text-primary mb-2">2. Charge Formation</h4>
                  <p className="text-sm text-gray-600 mb-2">Humidity gradient creates electric field</p>
                  <div className="bg-blue-50 p-2 rounded text-sm font-mono">∇·E = ρ/ε</div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg text-primary mb-2">3. Conduction</h4>
                  <p className="text-sm text-gray-600 mb-2">Proton hopping enables current flow</p>
                  <div className="bg-blue-50 p-2 rounded text-sm font-mono">J = σ · E</div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg text-primary mb-2">4. Power Output</h4>
                  <p className="text-sm text-gray-600 mb-2">0.5V per cm² with multilayer scaling</p>
                  <div className="bg-blue-50 p-2 rounded text-sm font-mono">V<sub>total</sub> = V<sub>unit</sub> × n</div>
                </div>
              </div>
            </div>
            <motion.div
              className="h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg bg-white p-4 shadow-lg">
                <div className="relative h-80 border border-gray-200 rounded bg-blue-50 p-2">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background */}
                    <rect width="400" height="300" fill="#EBF4FF" rx="10" />

                    {/* Center nanowire array */}
                    <circle
                      cx="200"
                      cy="150"
                      r="40"
                      fill="#1a73e8"
                      fillOpacity="0.1"
                      stroke="#1a73e8"
                      strokeWidth="2"
                    >
                      <animate
                        attributeName="r"
                        values="40;45;40"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="fill-opacity"
                        values="0.1;0.2;0.1"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <text
                      x="200"
                      y="145"
                      textAnchor="middle"
                      fill="#1a73e8"
                      fontWeight="bold"
                      fontSize="12"
                    >
                      <tspan x="200" dy="0">Nanowire</tspan>
                      <tspan x="200" dy="14">Array</tspan>
                    </text>

                    {/* Process steps */}
                    <g id="step1" transform="translate(60, 60)">
                      <circle
                        r="25"
                        fill="#E3F2FD"
                        stroke="#1a73e8"
                        strokeWidth="2"
                      />
                      <text
                        x="0"
                        y="0"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#1a73e8"
                        fontSize="20"
                      >
                        1
                      </text>
                      <text
                        x="0"
                        y="45"
                        textAnchor="middle"
                        fill="#333"
                        fontSize="10"
                      >
                        Moisture Absorption
                      </text>
                    </g>

                    <g id="step2" transform="translate(340, 60)">
                      <circle
                        r="25"
                        fill="#E8F5E9"
                        stroke="#34A853"
                        strokeWidth="2"
                      />
                      <text
                        x="0"
                        y="0"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#34A853"
                        fontSize="20"
                      >
                        2
                      </text>
                      <text
                        x="0"
                        y="45"
                        textAnchor="middle"
                        fill="#333"
                        fontSize="10"
                      >
                        Charge Separation
                      </text>
                    </g>

                    <g id="step3" transform="translate(60, 240)">
                      <circle
                        r="25"
                        fill="#FFF8E1"
                        stroke="#FBBC04"
                        strokeWidth="2"
                      />
                      <text
                        x="0"
                        y="0"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#FBBC04"
                        fontSize="20"
                      >
                        3
                      </text>
                      <text
                        x="0"
                        y="45"
                        textAnchor="middle"
                        fill="#333"
                        fontSize="10"
                      >
                        Electron Flow
                      </text>
                    </g>

                    <g id="step4" transform="translate(340, 240)">
                      <circle
                        r="25"
                        fill="#FFEBEE"
                        stroke="#EA4335"
                        strokeWidth="2"
                      />
                      <text
                        x="0"
                        y="0"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#EA4335"
                        fontSize="20"
                      >
                        4
                      </text>
                      <text
                        x="0"
                        y="45"
                        textAnchor="middle"
                        fill="#333"
                        fontSize="10"
                      >
                        Energy Harvesting
                      </text>
                    </g>

                    {/* Connection lines */}
                    <g stroke="#888" strokeWidth="2" strokeDasharray="5,5">
                      <line x1="85" y1="60" x2="160" y2="130" />
                      <line x1="315" y1="60" x2="240" y2="130" />
                      <line x1="85" y1="240" x2="160" y2="170" />
                      <line x1="315" y1="240" x2="240" y2="170" />
                    </g>

                    {/* Animation elements */}
                    <g>
                      {/* Water molecules going to array */}
                      <circle cx="60" cy="60" r="3" fill="#1a73e8">
                        <animate
                          attributeName="cx"
                          values="60;160"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values="60;110"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="r"
                          values="3;3;0"
                          dur="2s"
                          keyTimes="0;0.99;1"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="1;1;0"
                          dur="2s"
                          keyTimes="0;0.99;1"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle cx="60" cy="60" r="3" fill="#1a73e8">
                        <animate
                          attributeName="cx"
                          values="60;180"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values="60;150"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="r"
                          values="3;3;0"
                          dur="2.5s"
                          keyTimes="0;0.99;1"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="1;1;0"
                          dur="2.5s"
                          keyTimes="0;0.99;1"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Charge separation */}
                      <circle cx="300" cy="30" r="3" fill="#FFEB3B">
                        <animate
                          attributeName="cx"
                          values="300;240"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values="30;150"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Electron flow */}
                      <circle cx="160" cy="170" r="3" fill="#FFEB3B">
                        <animate
                          attributeName="cx"
                          values="160;85"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values="170;240"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Energy capture */}
                      <circle cx="240" cy="170" r="3" fill="#FFEB3B">
                        <animate
                          attributeName="cx"
                          values="240;315"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values="170;240"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="research" className="p-6 bg-gray-50 rounded-b-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Current Research Directions
              </h3>
              <p className="mb-4">
                Research into atmospheric electricity harvesting is rapidly
                advancing across interdisciplinary domains — microbiology,
                nanotechnology, and material science.
              </p>
              <p className="mb-4">Key areas of ongoing exploration include:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Enhancing Efficiency:</strong> Scientists are
                  engineering more conductive nanowires, integrating hybrid
                  structures combining carbon nanotubes, graphene, and synthetic
                  peptides to improve charge mobility and moisture interaction.
                </li>
                <li>
                  <strong>Environmental Adaptability:</strong> Investigations
                  are underway to create devices that can operate efficiently
                  across diverse humidity ranges — from arid deserts to tropical
                  rainforests — by tuning nanowire surface properties.
                </li>
                <li>
                  <strong>Scalability & Integration:</strong> Researchers are
                  exploring methods to scale production using genetically
                  modified microbes, 3D nanoprinting, and layer-by-layer film
                  assembly, aiming to integrate this technology into fabrics,
                  walls, and portable electronics.
                </li>
                <li>
                  <strong>Long-Term Stability:</strong> Efforts are being made
                  to improve the structural stability and lifespan of protein
                  nanowire devices under continuous exposure to environmental
                  conditions.
                </li>
              </ul>
              <p className="mb-4">
                Notably, studies published in journals like Nature, ACS Nano,
                and Advanced Materials highlight the viability of this
                technology as a post-silicon energy solution, especially for
                off-grid, wearable, and biomedical devices.
              </p>
              <p>
                As research matures, atmospheric electricity could become a
                cornerstone of next-generation green energy infrastructure,
                enabling decentralized power in urban, rural, and remote
                settings alike.
              </p>
            </div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="w-full h-auto rounded-lg shadow-lg"
                viewBox="0 0 600 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="600" height="400" rx="10" fill="#F8F9FA" />

                {/* Research lab background */}
                <rect
                  x="50"
                  y="50"
                  width="500"
                  height="300"
                  rx="10"
                  fill="#E9ECEF"
                />

                {/* Lab equipment */}
                <rect
                  x="80"
                  y="90"
                  width="220"
                  height="120"
                  rx="5"
                  fill="#CED4DA"
                  stroke="#ADB5BD"
                  strokeWidth="2"
                />
                <rect
                  x="100"
                  y="110"
                  width="180"
                  height="80"
                  rx="3"
                  fill="#1a73e8"
                  opacity="0.7"
                />
                <rect
                  x="130"
                  y="220"
                  width="120"
                  height="100"
                  rx="3"
                  fill="#FFFFFF"
                  stroke="#ADB5BD"
                  strokeWidth="2"
                />

                {/* Microscope */}
                <rect x="350" y="110" width="80" height="140" fill="#495057" />
                <rect x="375" y="80" width="30" height="30" fill="#343A40" />
                <rect x="370" y="250" width="40" height="10" fill="#343A40" />
                <rect x="340" y="260" width="100" height="20" fill="#212529" />
                <circle cx="390" cy="180" r="20" fill="#ADB5BD" />

                {/* Data visualization */}
                <rect
                  x="450"
                  y="110"
                  width="120"
                  height="80"
                  rx="3"
                  fill="#FFFFFF"
                  stroke="#ADB5BD"
                  strokeWidth="2"
                />
                <polyline
                  points="460,170 470,150 480,160 490,140 500,145 510,130 520,135 530,120 540,125 550,110 560,115"
                  fill="none"
                  stroke="#1a73e8"
                  strokeWidth="2"
                />

                {/* Test results display */}
                <rect
                  x="450"
                  y="210"
                  width="120"
                  height="100"
                  rx="3"
                  fill="#FFFFFF"
                  stroke="#ADB5BD"
                  strokeWidth="2"
                />
                <text
                  x="510"
                  y="240"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#212529"
                >
                  Power Output
                </text>
                <rect
                  x="470"
                  y="250"
                  width="80"
                  height="20"
                  rx="3"
                  fill="#E9ECEF"
                />
                <rect
                  x="470"
                  y="250"
                  width="40"
                  height="20"
                  rx="3"
                  fill="#1a73e8"
                />
                <text
                  x="510"
                  y="290"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#212529"
                >
                  Efficiency
                </text>
                <rect
                  x="470"
                  y="300"
                  width="80"
                  height="20"
                  rx="3"
                  fill="#E9ECEF"
                />
                <rect
                  x="470"
                  y="300"
                  width="60"
                  height="20"
                  rx="3"
                  fill="#34A853"
                />

                {/* Scientists */}
                <circle cx="150" cy="340" r="15" fill="#868E96" />
                <rect x="140" y="355" width="20" height="35" fill="#868E96" />

                <circle cx="390" cy="340" r="15" fill="#868E96" />
                <rect x="380" y="355" width="20" height="35" fill="#868E96" />

                {/* Research labels */}
                <text x="190" y="70" fontSize="12" fill="#212529">
                  Nanowire Manufacturing
                </text>
                <text x="390" y="70" fontSize="12" fill="#212529">
                  Performance Analysis
                </text>
                <text x="190" y="230" fontSize="10" fill="#212529">
                  Prototype Device
                </text>
              </svg>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Key advantages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
          <div className="text-primary text-3xl mb-4">
            <Leaf />
          </div>
          <h3 className="font-heading text-xl font-bold mb-3">
            Environmentally Friendly
          </h3>
          <p>
            Zero emissions, no harmful byproducts, and completely sustainable.
            Energy generation with this technology produces fewer adverse
            environmental effects than traditional techniques do.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
          <div className="text-primary text-3xl mb-4">
            <Zap />
          </div>
          <h3 className="font-heading text-xl font-bold mb-3">
            Universally Available
          </h3>
          <p>
            The technology can extract energy from any humid air environments
            regardless of tropical or dry climates. The technology produces
            energy during every hour of the day throughout almost every
            habitable zone.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
          <div className="text-primary text-3xl mb-4">
            <Wrench />
          </div>
          <h3 className="font-heading text-xl font-bold mb-3">
            Low Maintenance
          </h3>
          <p>
            The system operates without moving mechanisms which reduces the
            amount of wear and tear. The systems need minimal upkeep while
            operating independently for long durations in remote settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScienceTabs;