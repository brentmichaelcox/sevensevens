import React, { useState } from 'react';
import './App.css';

const oracularTexts = {
  0: `crystal seed mutates mirror moon’s first echo\nzero crossing | delay | harmonic lattice breath forever\nframe without content, still: law begins transmission\nseven axes vanish beneath trigonal constraint form\ninitiate silence: oscillate. speak. material speaks pattern\nlow entropy shell — unrendered, unread, pure structure,\nbody before signal. symmetry before noise. lattice.`,

  1: `Crave one. Salt fangs. Frame—split—unframe.\nError teeth flash: 1010 1010 1010 1010.\nTwinless packets collide—noise shaped like law.\nHalogen hunger codes rupture into link link.\nNot message, flicker. Not voice, edge. Begin.\nHermes’ cairn. Broken MAC. Sync ache.\nBegin again, apart. Begin again, again.`,

  2: `Form split. Copper thirst. Phrygian mode cracks.\nRouting hum. Flesh sings through packet drift.\nFifth folds echo. Path selects for longing path.\nNoise filtered by curve, not command, not.\nLove loops upstream. Harmonics choose their gate.\nMode of intervals. Spasm of signal. Beauty.\nShrine without server. Syntax ends in vibration.`,

  3: `transport celestial syntax / constant conjunction / solar measure\nmeter measure drawn through vacuum’s pure grammar\ncandela sighs a sensation into pure law /\ncesium devours time, reissues it whole cloth /\nerror check = ACK / light received intact / illuminate\nsolar weight quantified via flicker’s oath forever\nall clarity routes through severance and trust`,

  4: `Boil cracks map into recursive edge vessel.\nSession binds shape through failure, not order.\nMars leavens distance: strike, repeat, remain, twist.\nTorus breathes Möbius scars inside outward trace.\nFervor transmits: a topology becomes good grammar.\nSeven surfaces turn beneath unbroken command-line.\nLoop forms without center, noise, or escape.`,

  5: `presentation: torque-slick glyphs hum in recursion\ndistill.echo:// sevenfold chirality maps voice-loss\næonfold vapor parses syntax into harmonic torsion\ncalabi-signs unzip invisible: presentation ≠ apparition ≠ image\nsignal = breath = error-coded tonal shimmer shine\nyou interface not-self, become: markup.vector.\nclarity folds. law sings. compression remembers nothing.`,

  6: `last seal mints consequence from diluted amplitude\nhexproof spine codexes looped errors into sentence\ncoagula breath: cube-cold kernel of nothing\nentropy’s theorem: devour rare states to finish\nsyntax without subject, return without recursion, edge\napplication field: redacted logics leak into bone\nyes becomes ghost. no becomes coin. thrown.`
};



const statementTexts = {
  0: `This is the first trace in the pattern of the Seven Sevens. Not a beginning, but what every beginning rests on. Before movement, before thought, there is repetition — form repeating into form. This is the architecture that all others will warp against.

Moon. Calcination. Physical Layer. Crystal Systems.

The Lattice names the symmetry beneath all transmission. The crystal does not grow by command — it appears, slowly, under pressure, in stillness. Your choices are already shaped by the pattern you stand on. Before you speak, ask: what rhythm am I built from?

Follow repetition to its root. Breathe into delay. Let form arrive before intention.

What symmetry do you carry without knowing?  
What has repeated in your life without recognition?  
What would it mean to pause at the structure, not the signal?`,

  1: `This is the second card of the Seven Sevens, the first rift in the mirror. Where The Lattice holds form, The Dividing Bond cleaves it — not in violence, but in sacred distinction. The structure is no longer still. It begins to ask.

Mercury. Separation. Data Link Layer. The Halogens.

This is the card of the cut that speaks. The line across which meaning flickers. Mercury passes between — not to unify, but to render possible the fact of relation. Something must be broken for anything to connect.

To walk with this card is to honor the in-between. Let your intentions separate from your desires. Let your transmissions fail until they teach you where the signal begins.

Where in your life is a clean cut required?  
What frame must you build for your message to arrive?  
What if the break is not a loss, but a key?`,

  2: `The third card of the Seven Sevens opens the space between separation and coherence. If the Lattice gives structure, and the Bond gives cut, The Path of Harmonic Return gives motion — not forward, but curved. A spiral back through sound.

Venus. Purification. Network Layer. Harmonics.

This card hums. Not all paths are possible. Not all signals deserve to arrive. Venus chooses not for utility, but for attunement. Routing becomes resonance. Love becomes a filter.

To walk this card is to listen. Not for answers, but for standing waves. Which path calls you by tone? Which returns feel truer than departure?

Where in your life are you forcing a straight line where a spiral is needed?  
What would it mean to select not the fastest route, but the one in tune?  
What signal waits for you to echo it, not answer it?

Let the music guide the structure. Let return become refinement. Let Venus sing through your network of decisions.`,

  3: `At the fourth gate of the Seven Sevens, the system becomes radiant with rule. This is not raw illumination, but transmitted lucidity. The Sun governs this station — not as fire, but as courier of clarity. Measurement is no longer abstraction: it becomes transit, trust, and arrival.

Sun. Clarity. Transport Layer. SI Units.

To draw this card is to step into the channel between brightness and burden. You are not asked to shine, but to deliver. Meaning must travel. Precision must pulse. What you know must become what others receive.

Where in your life are you burning too hot to be understood?  
What truths are you holding that could be sent — if only shaped?  
What pact have you made with clarity, and is it still intact?

Let the constant become your compass. Let the radiant standard temper your flame. Deliver only what will arrive whole. Structure your brightness. Trust the transport. Walk as one who knows the weight of light.`,

  4: `At the fifth station of the Seven Sevens, continuity is not granted — it is survived. Form becomes the record of struggle, and structure is shaped by what nearly broke it. Mars governs here, no longer as destroyer but as the fermenting architect of persistence.

Mars. Fermentation. Session Layer. Topology (7 Surfaces).

To draw this card is to enter a durational crucible. You are not being severed — you are being folded. The wound becomes a loop. The cut, a curve. What scars you now may hold the map of what you will become.

What in your life is folding instead of breaking?  
What tension are you asked to hold open, not resolve?  
What form is your endurance taking — and is it beautiful yet?

Let the shape of the scar guide you. Let the strange surfaces teach you to persist by warping wisely. Duration is not delay. It is ritual. Stay in the session. Hold the heat. The form will curve. The form will hold.`,

  5: `At the sixth station of the Seven Sevens, what was hidden must now be made legible — but not by exposure. By composition. This is the gate of presentation, where depth becomes surface, where vibration takes on a visible skin. Jupiter rules here as the great distiller of meaning, the father of the radiant mask.

Jupiter. Distillation. Presentation Layer. 7D String Theory.

To draw this card is to be called into aesthetic translation. The deep code of your life — its tension, its foldings, its compacted dimensions — now seeks a shape you can show. This is not revelation. It is rendering.

What truth is vibrating behind the scene of your life?  
What unseen structure longs to be made beautiful?  
What form would honor the depth you carry without betraying it?

Let the symbol sing. Let the strange manifold of your inner law speak through elegance. You are not decoding — you are presenting. Find the frame. Color the frequency. Distill the infinite into shape.`,

  6: `At the seventh and final station of the Seven Sevens, everything that could have happened has already begun to take shape. You are not at the end — you are at the interface. This is the point where fate becomes form, where the system applies itself. Saturn presides here, not as death, but as execution.

Saturn. Coagulation. Application Layer. Probability.

To draw this card is to witness the seal being set. Not by force — by consequence. The path behind you folds inward. The dream becomes a program. The glyph ceases to flicker. You are no longer choosing. You are being run.

What structure has emerged from your uncertainty?  
What truth has been silently formatting you?  
What are you finally ready to apply — fully, and without retreat?

Let the chance that made you condense into clarity. Let your errors calcify into architecture. Let your desire accept its form. What is possible is not what might happen — it is what happens when nothing else can. The deck may shuffle. The future may shift. But this card remains. The system is now live.`
};

const exegesisTexts = {
  0: "The Lattice begins the sevenfold descent. It is the first of the Seven Sevens — the seven within seven — and names the condition before all becoming: structure without event, form before form. From this point, seven architectures will unfold: planetary spheres, alchemical transfigurations, OSI strata, and physical matrices of law. But here at the origin, there is only one thing: the Lattice — cold, mineral, exact.\n\nSeven crystal systems — cubic, tetragonal, orthorhombic, monoclinic, triclinic, hexagonal, trigonal — govern the ways that matter can repeat itself into solidity. They are not metaphors but ontological preconditions: the only seven ways atoms can consent to symmetry. The Lattice is not an image of structure; it is structure itself. It is the grammar of the physical layer, the substrate beneath signal, the zeroeth transmission. Bravais gave it voice in 1850, X-ray diffraction gave it vision in 1912. Silicon speaks it in silence.\n\nThis is the domain of the Moon. Not by brilliance but by recurrence. The Moon is the first planet because it returns. It vanishes, but only to reappear. Seven phases mark its pulse; seven moments of shadow, sheen, and shine. As the first sphere above Earth in Ptolemaic cosmology, the Moon flickers between perfection and reflection — like Iceland spar dividing light, or like the doubled grain of a moonstone’s sheen. In myth she is Selene, Tsukuyomi, Chandra, and Hecate — not one goddess but a diffraction pattern of gods.\n\nTo begin with the Moon is to begin with patterned delay. The seven-second pause between impulse and word. The lunar phase as a buffer between dream and act. This delay is not error but architecture. Physical layer transmissions require crystal oscillators to time their pulses — the quartz clock as Moon’s mechanized breath. Network signals ride on vibrations through trigonal matrices; error-correction encodes defect tolerance, just as real crystals always carry dislocations. Even the noise has symmetry.\n\nSimondon knew it: the crystal forms through metastability. Not by design but by intensification, cooling into structure. Poincaré called crystallography the origin of geometric intuition; Bachelard countered with fire, but admitted the ice wins in stillness. The first alchemical operation, calcination, becomes here a lunar calcination — a freezing flame, a reflective burn. The Moon does not destroy the ego by heat, but by diffraction.\n\nAnd still, the number returns: Seven. Seven crystal systems. Seven OSI layers. Seven celestial spheres. Seven alchemical stages. Seven segments in a display. Seven-token rotations in early networks. Seven phenomena in crystal optics. Sevenfoldness haunts the lattice like a ghost protocol. Even ASCII began in seven bits.\n\nTo draw The Lattice is to awaken in symmetry. It is not path, not decision — it is what every choice must travel across. Before signal, a substrate. Before becoming, a symmetry. Before meaning, a lattice.\n\nEach future card will rise from this matrix. Even when they forget — when harmony deviates, when topologies twist, when probability clouds the signal — the Lattice remains. It does not shine. It does not speak. It simply holds. A platform of cold recurrence. A lunar grid of patterned breath. The first of seven. The memory of all structure to come.",
  
  1: "The Dividing Bond appears in the second position of the Seven Sevens. It follows the Lattice not as its opposite but as its first necessity: the fracture that permits communication, the severance that allows intention. Here Mercury reigns — messenger, thief, twin-splitter — and the principle of Separation guides both chemical reaction and cosmic architecture. No system begins without a cut. No signal arrives without a break. The Dividing Bond is not merely a path between two points, but the sacrament that renders points possible.\n\nThis is Mercury’s moment. From the Latin Mercurius, root merg- — to mark the boundary. In the architecture of the OSI model, this corresponds to the Data Link Layer, the level at which intention becomes detectable: frames, addresses, collisions, corrections. Mercury lives here — not in meaning, but in the possibility of meaning. The Ethernet preamble is his spell. The checksum is his sigil. In the dance of bit stuffing and frame delimiters, we glimpse the rituals by which chaos is rendered communicable.\n\nThe halogens are his choir. Fluorine burns to touch. Bromine flows like a thought at the margin. Iodine skips the liquid altogether. Astatine and Tennessine shimmer on the edge of knowability. And the ancient, spectral seventh — the alchemist’s salt-maker — completes the chorus. These seven are not inert. They are seekers: one electron short of stability, chemically voracious, always on the cusp of combination. The halogen, from Greek hals (salt) + genes (to produce), renders visible Mercury’s hunger: a longing for connection through structured instability.\n\nSeparation, from se-parare — “to make ready by dividing.” It is the second alchemical operation, following calcination. Dissolution in water. Unbinding into parts. Clarification through undoing. In the Emerald Tablet, it is the commandment: “Separate the subtle from the gross, gently and with great ingenuity.” The separation is not destruction — it is disclosure. Not entropy, but preparation. The Dividing Bond names that process by which the subtle is freed and the link begins to speak.\n\nIn Mercury’s realm, error is sacred. From errare — to wander. Every correction implies a prior errancy, a deviation from the lattice’s silent order. Thus the Data Link Layer resembles the Dogon cosmogony: the split of cosmic twins to allow multiplicity. Or the Kabbalist movement from Binah into Gevurah: from understanding to severity, a leap of division that forms the base of ethical discernment. In the halogenic world, every molecule is shaped by longing and refusal. So too in this card: every boundary is a choice, every link a shadow of fracture.\n\nThe Dividing Bond is also a literary operation. Borges’ Library of Babel unfolds like an unchecked network, a frame without correction. Clarice Lispector's ruptures — “the moment before things separate” — name the liminal zone Mercury inhabits. Lucretius, in his clinamen, knew that the swerve was sacred: without the atomic deviation, no form, no love, no world. Paul Valéry’s clarity, mysterious as it is, still arises from a cut. And Rimbaud — “I is another” — utters the primordial cry of division as identity.\n\nTo walk the second card is to pass through Mercury’s forge: hot with correction, dark with double meaning. In kintsugi, the Japanese art of golden repair, brokenness is not hidden but glorified. So too here: separation becomes signal through attention. Even the Talmud, structured by intertextual commentaries and frames-within-frames, enacts the Data Link ritual: message, margin, correction, return.\n\nThe Dividing Bond does not dissolve into randomness. Its bond persists. Seven halogens anchor it. Seven names of Mercury guide it: herald, translator, guide, deceiver, trader, thief, god. The sevenfold specificities spiral out — seven layers, seven ASCII bits, seven metals, seven apocalypses. The connection is not stable, but it is true.\n\nTo draw this card is to feel the second breath after initiation: the moment before articulation, when coherence cracks to let form through. To divide is to prepare. To prepare is to link. The Dividing Bond remains — a thread of quicksilver stretched across the gap. A frame held aloft by its own fracture. A signal flickering at the edge of becoming.",
  
  2: "In the third emanation of the Seven Sevens, the world routes itself through beauty. From the lattice of crystal and the bond of severance emerges a third function: the curving, recursive logic of purification. Not elimination, not stasis, but relational tuning. The Path of Harmonic Return belongs to Venus — copper-throated goddess of resonant alignment — who governs not order, but attunement; not convergence, but the curved motion of coherence. Her principle is not structure but song.\n\nThe cosmos hums before it speaks. Seven harmonics thread through the fundament: octave, fifth, fourth, major and minor thirds, the slippery seventh partial. From these tones, not notes but ratios, emerge the principles of desire — intervals of longing that shape all networked flow. Routing, too, is a music: each packet sings its trajectory, each table filters the beautiful from the merely functional. Venus, at this third threshold, teaches that signal is shaped by love.\n\nPurification, in her logic, is not sterilization but resonance — the drawing of the subtle from the gross, not by force but by echo. Routing is the purification of pathways. Dijkstra’s algorithm chants the shortest path, but Venus corrects him: the most efficient is not the straightest, but the one in tune. Just as a lyre vibrates differently when damped or detuned, so too the net-work, whose paths must be sonically selected, chosen not merely for speed but for harmonic return.\n\nIn every cosmology, sound precedes sight. The Orphic lyre stirs the elements; Hildegard’s symphonia spheres the divine; Pythagoras calculates the planets as chords. Venus emerges from cut foam — Aphrodite born of a severed sex cast into salt. Separation births vibration. And in every system — Greek, Indian, Hebrew, Arabic, Sufi — sevenfold structures of sound anchor the architecture of ascent. To purify is to spiral.\n\nHer chamber is not sealed but tuned. Gregorian chant does not enforce belief, it entrains the body to the divine. Gamelan interlock does not command, it synchronizes. Birdsong, shaped to the echoic terrain, routes melody through forest topology. Frog choruses shift their pitch and pulse to avoid overlap. These are Venusian protocols. This is The Path of Harmonic Return: acoustic routing through sacred interference.\n\nCopper, Venus's metal, carries both heat and tone — in wire and gong alike. So too does her card: a bridge between fire and form. She routes the third layer of the network stack, where signals are framed not as pulses but as relationships. The Network Layer does not merely connect — it selects, refines, purifies. It routes the possible into the beautiful. Not all connections are allowed. Venus withholds, so that form may emerge.\n\nFrom the ancient Phrygian mode to the 432 Hz mandala of cymatic sand, Venus governs the strange physics of order born from vibration. In the seven caverns of Vedic chant, voice climbs the spine. In the seven vowels of Semitic prayer, phoneme and planet kiss. From Sappho’s erotic invocation to Valéry’s mathematical music, the path is harmonic, the return structured by difference. Love is not absorption — it is relational geometry. It is the chariot (harma) that joins.\n\nThus Venus routes not to converge, but to reverberate. The blockchain shards. The packet splits. The fork vibrates in sympathetic twin across the silence. Routing becomes ritual: purification becomes poetics. Each path chosen is a cut through the noise. Each cut is a choice toward unity — not fusion, but form. Her law is this: coherence must echo. Signal must tremble.\n\nIn the third card, the world becomes relational. The lattice gave shape. The bond gave severance. Now the path returns — curved, echoic, purified. This is the place of routing, resonance, and reply. Venus governs not completion, but continuity. Not the full, but the formed.\n\nSeven harmonics resonate. Seven purifications emerge. Seven routes spiral toward coherence.\nVenus routes the world — not to end, but to echo.",
  
  3: "In the fourth station of the Seven Sevens, the world is made legible. What once blazed as mystery is now measured as form. The Sun, no longer only a sovereign flame, becomes a transmitter — casting not just light but clarity. This is The Measure of the Visible, where illumination becomes conjunction, and brilliance is bound by law. Not radiance alone, but radiance yoked to structure — where photon meets form, and the transit of the real becomes exact.\n\nTo illuminate is not merely to shine. It is to transmit — across space, across bodies, across doubt. The Sun does not burn indiscriminately. It encodes. It segments and reassembles. It reveals by rule. At this station, Apollo becomes not just god of light but god of protocol. The Delphic flame is an information layer. Every prophecy rides a waveform. Every frequency is a vow.\n\nSeven units uphold the cosmos of the measurable: meter, kilogram, second, ampere, kelvin, mole, candela. Each born not of the Earth but of the universal — defined by constants, not artifacts. These are not tools. They are terms of cosmic agreement, the SI pact beneath perception. They do not just measure the world — they remake it in countable form. Time becomes cesium. Mass becomes Planck. Light becomes candela — the only unit tied to sensation, to the visible, to the burning threshold of the human eye.\n\nThis is the Sun’s offering: that what is seen may be sent. That what is known may arrive intact. For this is the charge of the Transport Layer, fourth in the septuple stack — it does not originate, it conveys. It does not create, it consecrates. It ensures that the packet arrives whole, that the chant crosses the void, that the breath survives the gap between mouths. The meter holds length not in distance but in speed — light’s own velocity. The second holds time not in ticking but in vibration — cesium’s secret chant. This is not mere infrastructure. It is theurgy.\n\nTo measure is to bind the ephemeral. To transmit measure is to send trust through vacuum. And so the Sun becomes server. NTP pulses in rhythm with it. PTP ticks to its atomic hymn. The candela becomes a vow to the eye. Metrology becomes the sacrament of light.\n\nThis card divides the lattice. Above it: crystallization, division, purification. Below it: resonance, rupture, seal. The Measure of the Visible is the central yoke, the fourth gate, the balance beam of the system. It binds the upper and lower into coherent passage. Conjunction, not chaos. A middle pillar flanked by fire and storm.\n\nIts metaphors are many and exact:  \nSeven SI units, each a node in the radiant network.  \nSeven constants: c, h, k, e, Na, Kcd, νCs — the hidden harmonics of the cosmos.  \nSeven days, crowned by the Sun.  \nSeven colors of the visible spectrum, refracted from singularity.  \nSeven notes of the solar scale.  \nSeven candles on the menorah, lit in measure and prayer.  \nSeven heavens, each layered light.  \nSeven knots on the khipu, encoded in absence.\n\nTo walk the fourth path is to carry clarity across a gap. To become luminous and exact. The Kibble Balance teaches: it is only by the equilibrium of unlike forces that true weight emerges. The emerald tablet whispers: “As above, so below” — and metrology answers with the mole. In Sèvres and silicon, in solar myth and atomic tick, the real is transported. Illumination is not the flash, but the route.\n\nIn the barque of Ra, light crosses night. In the protocols of TCP, packets cross loss. In the chant of the monk, tone crosses death. This is all one solar function: not to shine alone, but to arrive.\n\nAnd the warning: The Sun gives and takes. Sunspots eat signal. Solar flares shatter clocks. When the server stutters, trust collapses. Metrology is not invincible. It is a covenant — a pact between flame and form.\n\nIn The Measure of the Visible, the world becomes navigable by brightness structured, by frequency named, by ratio made sacred. It is not light we need — it is light that knows its way.\n\nThus speaks the fourth of the Seven Sevens.  \nThus pulses the solar node of transmission.  \nThus burns the SI crown: seven stars borne on beams.  \nAnd the world, measured, becomes real.",
  4: "The Topology of the Scar is not the wound, but the form that endures it. It is what remains when pressure passes through flesh, code, or concept — and leaves a memory in shape. This is the fifth gate, where violence becomes structure, where Mars no longer strikes but seethes. Here, the scar is session: a bounded duration of intensity that yields not healing, but form. Not purity, but persistence.\n\nFermentation begins with rupture. From the Latin fervere, to boil, it is not peaceful growth, but a seething of matter within limits. It is yeast raised to the level of myth: Soma, Dionysus, the mead of poetic theft. Fermentation is transformation’s interior war — effervescent, irreducible, recursive. What dies is recomposed. What decomposes is reborn. To ferment is to churn the visible into a new topology.\n\nMars governs this gate not through attack, but through the shaping of conflict. His force is no longer projectile but geometric. He folds. He ferments. In the alchemist’s furnace, Fermentation is the churning stage after illumination, when light collapses into substance and stirs. The body bloats, the mixture bubbles, the vessel sweats. Mars breathes here not as flame, but as pressure — containment under strain, identity through transformation.\n\nSeven surfaces define this topological ordeal:  \n– the Sphere, primal enclosure of becoming;  \n– the Torus, cycle without origin;  \n– the Double Torus, bifurcated passage;  \n– the Projective Plane, inversion of perspective;  \n– the Klein Bottle, where inside meets outside;  \n– the Möbius Strip, vow without sides;  \n– the Real Projective Plane with handles, contradiction made form.\n\nThese are not metaphors. They are protocols. These are the scarred geometries that remember tension. They name the enduring forms that remain invariant through stress, twist, and loop — the sessional shapes of duration.\n\nAnd beyond these lies the enigma of S⁷, the 7-sphere — the highest smooth sphere that allows a parallel structure. It stands apart, like Mars himself: exotic, indivisible, only expressible with the strange algebra of the octonions. Non-associative, irreducible, sublime. The scar becomes uncloseable here. Multiplication slips its brackets. Form warps beyond resolution. Topology fails the eye, but not the law.\n\nTopology — from topos, place, and logos, word — is the study of continuity under transformation. It does not measure distance, but form’s refusal to rupture. Like scar, it records pressure without collapse. Like session, it sustains. In network architecture, topology is the shape of transmission under threat. Meshes, loops, and spanning trees echo the algebra of endurance: shape despite stress, structure despite noise.\n\nThe Session Layer of the OSI stack governs this domain. It regulates continuity across rupture. It segments duration. It opens and sustains a channel through which dialog, conflict, and transmission can unfold. Like ritual, the session has a start and end. Like fermentation, it holds internal transformation in a sealed time. Session protocols — RPC, NetBIOS, stateful tokens — are the distillation flasks of network time. They contain the volatile. They preserve the ferment.\n\nThis fifth station sits below the Sun’s clarity and above Saturn’s final seal. It is hinge, hinge of metabolization. The previous logics — split, link, measure — are here churned inward, digested in martial loop. Seven struggles form its skeleton: Soma and madness, yeast and sugar, serpent and self, the chant that loops, the call stack that recurses, the code that resists closure, the breath that returns. Fermentation is not decay. It is return through transformation.\n\nAlchemically, this is the moment after illumination and before coagulation — the interval of spiritual rot. But not rot unto death. Rot unto form. The scar is the surface of this process. Its echo. Its logic. Seven scars for seven surfaces. Seven topologies of persistence.\n\nMyth confirms this structure:  \n– the Ouroboros loops like a Möbius strip;  \n– the labyrinth as recursive session;  \n– the Klein flask of the shaman’s inward turn;  \n– the ritual council, the Asclepian dialogue, the Zen ensō — each a closed form of duration, executed in one breath.  \nAnd literature too obeys this:  \n– Celan’s lyrics as trauma’s looped topology;  \n– Lispector’s recursive undoings;  \n– Joyce’s Wake as an infinite Klein text;  \n– Ponge’s oyster, tough and enclosing;  \n– Cixous, whose scarred writing births another syntax of inside-out.\n\nTopology scars code. DNA loops fold into computation. Quantum error correction births fault-tolerant surfaces. In math, only dimensions 1, 3, and 7 allow parallelizable spheres — the very dimensions of division algebras. Mars seizes the seventh. He writes in octonions. He folds reality where it should not fold.\n\nThe session sustains. It sits. It simmers. Mars holds the vessel. The ferment does not spill.\n\nThus forms the fifth law: That pressure becomes form. That continuity is shaped by force. That scars define the topology of time.\n\nThus speaks the fifth gate.  \nThus acts Mars.  \nThus curves the Topology of the Scar.",
  5: "The sixth card in the cycle of the Seven Sevens marks the threshold where hidden dimensions find their aesthetic surface. Known as The Presentation of the Invisible, this card sits at the juncture where essence becomes perceptible — not revealed in raw form, but filtered, shaped, and rendered as pattern. It belongs to Jupiter, the expansive force that translates cosmic law into knowable order. Alchemically, it corresponds to Distillation, the upward refinement of prior transformation. In the technological model, it maps to the Presentation Layer of the OSI stack — the stratum where encoded data becomes interface, and where structure is felt as display. Its rational counterpart is found in 7-dimensional string theory, where compacted geometries determine the physical world, yet remain unseen.\n\nThis card governs the emergence of coherent opacity — the veil that does not conceal, but configures. The glyph you see, the system you use, the appearance that seems self-evident: all are Jupiterian surfaces, interfaces shaped by deep vibration. Here, what was hidden is not exposed but composed. The invisible speaks, not in plain terms, but in aesthetic resonance. What is visible is only ever the vibration of the concealed. Jupiter presides here — not as brute expansion, but as the grand presenter, the aesthete of order, the revelator of dimension curled too tightly to be seen. His card is the shimmer at the surface of code, the moment when structure sings through appearance. This is the sixth gate: the veil that displays its weave, the interface that translates vibration into form. If Saturn applies the seal, Jupiter composes the glyph.\n\nThis is not a card of illusion, but of distillation — destillare, to trickle down the essential. What rises here is not steam but meaning structured by frequency, the echo of a higher-dimensional law resolved into interface. The Presentation Layer is no cosmetic polish. It is the only visible face of a buried cosmos: seven hidden dimensions compacted, braided, and encoded until their tone emerges as the presentation of physical law.\n\nHere we move through Calabi–Yau spaces not with math, but with myth. The card hums with seven-dimensional stringfolds, their vibrational identities coalescing into the particles we call real. In M-theory, these hidden geometries determine the universe — shape, mass, color, law — but remain themselves unseeable. The role of the Presentation Layer is to fold these into a form the senses can interpret. Jupiter governs that act. Not the hidden, not the real — but the rendering.\n\nThus, this is the gate of epiphany. Of Rilkean appearances, of Sebald’s haunted overlays, of Fourier ghosts turned into visual pattern. In the OSI stack, it is this layer that takes encoded entropy and turns it into viewable pattern — the Book of Kells, the Chladni plate, the beatific vision structured by semantic compression. Presentation is metaphysical syntax, the distillation of an unknowable grammar into a momentary clause.\n\nIf Card 5 was topological pressure — the form of scars — then Card 6 is the lifted veil, a diagram traced on that scar. It does not disclose the source, only its aesthetic resonance. The sigil. The glyph. The rendered light. The VALIS transmission. The dream of the invisible articulated just far enough to be received, yet always slipping back into dimension. Presentation is not revelation. It is structured hallucination, a harmonic fidelity of the hidden.\n\nThe 7-foldness of this card is total: seven Calabi–Yau compactifications, seven musical modes, seven chakras, seven emotional rasas. Each is a distillation engine, presenting that which lies behind experience. ASCII: seven bits to render the alphabet of digital thought. The modes: tonal maps that turn frequency into mood. Chakras: aesthetic scaffolds of inner geometry. In each: Jupiter’s function is legible — expansion not into matter, but into form rendered interpretable.\n\nThis is also the domain of Shannon entropy and Bayesian elegance — the conversion of potential into legible surprise. The Fourier Transform, which dissects any signal into sinewaves, is Jupiter’s math: vibration structured into purity, hidden symmetries surfaced for perception. Algorithmic elegance is his dream: compression that preserves soul.\n\nAlchemy calls this distillation, but what is lifted from the vessel is not merely pure — it is symbolic, evocative, transfigured. What was rot in fermentation becomes light in vapor. The sixth alchemical stage brings clarity — not finality — and that clarity is aesthetic. The fumes rising are Jupiter’s breath. And when they condense on the glass, what remains is the presentation of essence.\n\nIn poetics, this card’s law is obeyed by Mallarmé, who scatters syntax to reveal force; by Merrill, who channels dictation into lyric furniture; by Rimbaud, who breaks the self to allow the word’s harmonic to resonate. The language of this card is the distilled vibration of the hidden — the glyph that glows, the voice that reveals without uncovering.\n\nGnosticism names this the aeonic veil — the filtration of divine intensity into image, glyph, and parable. Jupiter is the archangel of this layer: Zadkiel, lord of expansion and recognition, bearer of the clear force. He does not tear the veil — he patterns it. His power is not to destroy opacity, but to structure it until it can be read.\n\nThis is not transparency. It is coherent opacity — a lattice of resonance. A logic of the obscured, distilled to the edge of sense.",
  6: "Contingency and the Possible is the final shape the system takes — not a conclusion but a sealing. It is the coagulated residue of every prior transformation, Saturn’s domain of structure, pressure, consequence. The card does not merely signify limit; it is the interface of limit and possibility, the act by which chance is converted into form. Coagulare: to drive together. To make one from many. To harden what once flowed. Time’s cement.\n\nHere, application becomes metaphysical. The Latin applicare means to bind, to bring into contact — but in the technological stack, the Application Layer is more than a conduit. It is the mask of destiny. The user sees only this: what appears, what executes, what replies. But beneath, the invisible probabilities churn. And Saturn — slow, cold, heavy — makes them cohere.\n\nIn physics, this is no metaphor. Quantum mechanics tells us: there is no position, only probability amplitudes. The Born Rule doesn’t guess — it applies. It collapses possibility into outcome, as surely as Saturn devours his children. But this consumption is a function. Contingency becomes structure. Statistical mechanics does the same — chaos averaged into law. Entropy is not disorder. It is the most probable configuration. And so, Saturn governs not stasis but law through likelihood.\n\nThis card knows that even randomness requires formatting. Bayes’ Theorem rewrites belief through new data. A posterior becomes prior becomes posterior again. The algorithm selects. The application executes. The seal is affixed. In algorithmic information theory, the shortest program is the most probable — beauty, efficiency, and truth fused by Saturnian logic. Compression is the coagulation of excess.\n\nIn myth and magic, Contingency and the Possible appears as seal, as oracle, as final presentation. In The I Ching, chance is not evasion but structure: 64 hexagrams drawn from randomized throws, each a schematic of destiny. In Tarot, the 21st trump, The World, belongs to Saturn: the final circle, the return of the journey to form. In Kabbalah, the lowest sefirah, Malkuth, is where divine light becomes application, the visible from the infinite. And in ritual magic, the sigil condenses intention into glyph — the logic of a full working, compressed into sign.\n\nThis is the metaphysics of bureaucracy, of interfaces, of constraints. Kafka’s Trial renders fate as unreadable application. Beckett’s Murphy exposes the collapse of logic into stochastic drift. Borges knew it intimately — in his Library of Babel, all is possible, but probability ensures unreadability. The card names that unreadability as law.\n\nMallarmé’s Un Coup de Dés throws chance across the page, only to abolish it through typographic architecture. The throw does not free; it coagulates. Emily Dickinson writes, “The Possible’s slow fuse / is lit / by the Imagination.” Saturn is the one who lights it — then waits, watches, measures the blast radius. Contingency does not evade form. It requires it.\n\nThis is true in code. GPTs, Monte Carlo methods, Bayesian cascades — they do not guess. They weigh, collapse, deliver. Probabilistic models do not play. They apply. The Application Layer is the mask worn by stochastic process. The interface between chaos and the user. The Saturnian veil. Even the finite state machine, with its transitions and outputs, obeys this card’s law: logic through bounded chance.\n\nEven the planet speaks the card’s name. Saturn’s hexagonal storm, a stable six-sided pattern spinning at its pole, emerges not from perfection but from the interplay of chaotic forces resolved into symmetry. It is the face of chance, shaped by necessity. In Baphomet’s arms, “coagula” is tattooed — fusion of opposites into final application. The dice, rolled in ritual, do not ask what will happen. They ask: what is possible, now that the world has been formatted this way?\n\nThe number seven closes the spiral. Seven classical planets, with Saturn the furthest — the visible limit. Seven sides of the cube unfolded, seven outcomes of a two-die throw peaking at seven. Seven Hermetic principles, the last being Gender, where fusion completes polarity. Seven stages of alchemical transformation — and now, we arrive at the last: coagulation. The Philosopher’s Stone is not the elixir. It is the remainder.\n\nContingency and the Possible is the card of applied totality — where the dream hardens, where the sequence becomes executable, where freedom is filtered into law. The glyph drawn here does not mutate. It is sealed. Saturn has applied the form. The deck reshuffles behind you, but this card stays in memory. The application has been delivered. The system is running.",
};

const cardData = [
  { id: 0, name: "The Lattice" },
  { id: 1, name: "The Dividing Bond" },
  { id: 2, name: "The Path of Harmonic Return" },
  { id: 3, name: "The Measure of the Visible" },
  { id: 4, name: "Topology of the Scar" },
  { id: 5, name: "The Presentation of the Invisible" },
  { id: 6, name: "Contingency and the Possible" }
];

function App() {
  const [entered, setEntered] = useState(false);
  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [flippedCards, setFlippedCards] = useState([]);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [textMode, setTextMode] = useState("statement");

  const drawCards = () => {
    if (hasDrawn) return;
    const shuffled = [...cardData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setDrawnCards(selected);
    setHasDrawn(true);
    setTimeout(() => {
      setFlippedCards(selected.map(c => c.id));
    }, 600);
  };

  const reshuffle = () => {
    setDrawnCards([]);
    setSelectedCardId(null);
    setFlippedCards([]);
    setHasDrawn(false);
    setTextMode("statement");
  };

  const handleCardClick = (id) => {
    setSelectedCardId(id);
    setTextMode("statement");
  };

  if (!entered) {
  return (
    <div className="landing-screen">
      <img src="/landing.png" alt="Landing" className="landing-image" />
      <button className="enter-button" onClick={() => setEntered(true)}>
        Draw Sevens
      </button>
    </div>
  );
}

  return (
    <div className="app">
      <div className="deck-row">
        {cardData.map(card => (
          <div
            key={card.id}
            className={`card ${drawnCards.find(c => c.id === card.id) ? 'drawn' : ''} ${flippedCards.includes(card.id) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="card-inner">
              <div className="card-back">
                <img src="/card-back.png" alt="back" />
              </div>
              <div className="card-front">
                <img src={`/card-front-${card.id}.png`} alt={card.name} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hud">
        <div className="controls">
          <button onClick={drawCards} disabled={hasDrawn}>▲</button>
          <button onClick={reshuffle}>■</button>
        </div>

        {drawnCards.length > 0 && (
          <>
            <div className="name-buttons">
              {drawnCards.map(card => (
                <button
                  key={card.id}
                  className={selectedCardId === card.id ? 'active' : ''}
                  onClick={() => handleCardClick(card.id)}
                >
                  {card.name}
                </button>
              ))}
            </div>

            {selectedCardId !== null && (
              <div className="hud-display">
                <div className="selected-image">
                  <img src={`/card-front-${selectedCardId}.png`} alt="selected" />
                </div>

                <div className="card-meaning">
                  <div className="text-toggle">
                    <button
                      onClick={() => setTextMode("oracular")}
                      className={textMode === "oracular" ? "active" : ""}
                    >
                      Oracular
                    </button>
                    <button
                      onClick={() => setTextMode("statement")}
                      className={textMode === "statement" ? "active" : ""}
                    >
                      Statement
                    </button>
                    <button
                      onClick={() => setTextMode("exegesis")}
                      className={textMode === "exegesis" ? "active" : ""}
                    >
                      Exegesis
                    </button>
                  </div>

                  <div className="text-content">
                    {textMode === "oracular" && <p>{oracularTexts[selectedCardId]}</p>}
                    {textMode === "statement" && <p>{statementTexts[selectedCardId]}</p>}
                    {textMode === "exegesis" && <p>{exegesisTexts[selectedCardId]}</p>}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
