// California DMV practice questions drawn from the California Driver Handbook.
// Not an official DMV test. Confirm current rules at dmv.ca.gov.

const QUESTION_BANK = [
    {
        category: "Speed limits",
        question: "Unless otherwise posted, the maximum speed limit on most California highways is:",
        options: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correct: 1,
        explanation: "The ideal maximum speed limit on most California highways is 65 mph unless a sign posts a different limit. Some freeways allow 70 mph where posted."
    },
    {
        category: "Speed limits",
        question: "Unless otherwise posted, the speed limit in a business or residential district is:",
        options: ["15 mph", "25 mph", "35 mph", "45 mph"],
        correct: 1,
        explanation: "The speed limit is 25 mph in business and residential districts unless a sign says otherwise."
    },
    {
        category: "Speed limits",
        question: "The speed limit within 500 feet of a school, when children are outside or crossing the street, is:",
        options: ["15 mph", "20 mph", "25 mph", "35 mph"],
        correct: 2,
        explanation: "The speed limit is 25 mph within 500 feet of a school while children are outside or crossing the street. Some school zones are posted as low as 15 mph."
    },
    {
        category: "Speed limits",
        question: "The speed limit in an alley is:",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correct: 1,
        explanation: "An alley is a road no wider than 25 feet used to reach the rear or side of buildings. The speed limit is 15 mph."
    },
    {
        category: "Speed limits",
        question: "At a blind intersection with no stop signs, the speed limit is:",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correct: 1,
        explanation: "A blind intersection has no stop signs at any corner. If your view is blocked, move slowly forward until you can see. The speed limit is 15 mph."
    },
    {
        category: "Speed limits",
        question: "Within 100 feet of a railroad crossing, if you cannot see the tracks for 400 feet in both directions, you must not drive faster than:",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correct: 1,
        explanation: "The speed limit is 15 mph in that situation. You may drive faster if the crossing is controlled by gates, a warning signal, or a flagman."
    },
    {
        category: "Speed limits",
        question: "Unless otherwise posted, the speed limit on a two-lane undivided highway is:",
        options: ["45 mph", "55 mph", "65 mph", "70 mph"],
        correct: 1,
        explanation: "The speed limit is 55 mph on a two-lane undivided highway and for vehicles towing trailers, unless a sign posts a different limit."
    },
    {
        category: "Speed limits",
        question: "California’s basic speed law says you must:",
        options: ["Always drive at the posted speed limit", "Never drive faster than is safe for current conditions", "Drive 5 mph under the posted limit at night", "Match the speed of the fastest traffic"],
        correct: 1,
        explanation: "Even if a higher speed is posted, you must never drive faster than is safe for weather, visibility, traffic, and road conditions."
    },
    {
        category: "Signs",
        question: "A yellow diamond-shaped sign usually means:",
        options: ["A regulatory instruction you must obey", "A warning of a hazard or special condition ahead", "A destination or distance", "A rest area or service"],
        correct: 1,
        explanation: "Yellow diamond signs are warning signs. They alert you to conditions such as curves, merging traffic, or slippery roads."
    },
    {
        category: "Signs",
        question: "A red octagon sign means:",
        options: ["Yield", "Do not enter", "Stop", "Wrong way"],
        correct: 2,
        explanation: "The eight-sided red sign is a stop sign. Come to a full stop, then proceed when it is safe."
    },
    {
        category: "Signs",
        question: "A downward-pointing red triangle sign means:",
        options: ["Stop", "Yield", "No passing", "Merge"],
        correct: 1,
        explanation: "An inverted red triangle is a yield sign. Slow down, give the right-of-way, and stop if necessary."
    },
    {
        category: "Signs",
        question: "A round yellow sign with a black “X” and “RR” warns you of:",
        options: ["A school crossing", "A hospital zone", "A railroad crossing ahead", "A construction zone"],
        correct: 2,
        explanation: "The round yellow railroad-crossing sign warns that tracks are ahead. Slow down, look, and listen."
    },
    {
        category: "Signs",
        question: "A five-sided (pentagon) sign usually indicates:",
        options: ["A no-passing zone", "A school zone or school crossing", "A hospital", "A rest area"],
        correct: 1,
        explanation: "Pentagon-shaped signs mark school zones and school crossings."
    },
    {
        category: "Signs",
        question: "An orange diamond-shaped sign typically means:",
        options: ["A recreation area", "A construction or work zone", "A hospital nearby", "A scenic viewpoint"],
        correct: 1,
        explanation: "Orange signs warn of construction, maintenance, or other temporary work zones. Fines are often doubled when workers are present."
    },
    {
        category: "Signs",
        question: "A white rectangular sign with black letters is usually:",
        options: ["A warning", "A regulatory sign you must follow", "A recreation guide", "A mileage marker only"],
        correct: 1,
        explanation: "White rectangular signs give laws and regulations, such as speed limits, one-way, or no parking."
    },
    {
        category: "Signals",
        question: "A flashing red traffic light means you must:",
        options: ["Slow down and continue if the way looks clear", "Stop, then go when it is safe, as at a stop sign", "Stop and wait until it turns green", "Yield only to vehicles on the right"],
        correct: 1,
        explanation: "Treat a flashing red light like a stop sign: full stop, then proceed when the intersection is clear."
    },
    {
        category: "Signals",
        question: "A flashing yellow traffic light means:",
        options: ["Stop completely, then go", "The light is about to turn red", "Slow down and proceed with caution", "You must turn right"],
        correct: 2,
        explanation: "A flashing yellow light means proceed with caution. Slow down and be ready to stop if needed."
    },
    {
        category: "Signals",
        question: "A steady yellow traffic light means:",
        options: ["Speed up to clear the intersection", "Stop if you can do so safely", "The same as a green light", "You may turn left without yielding"],
        correct: 1,
        explanation: "Yellow warns that the light is about to turn red. Stop if you can do so safely; do not race the light."
    },
    {
        category: "Signals",
        question: "A solid red arrow means:",
        options: ["You may turn after a complete stop", "You may turn if no one is coming", "You must not turn in that direction until the arrow goes out", "You may turn only during daylight"],
        correct: 2,
        explanation: "A red arrow means you may not turn in that direction, even after stopping, until the arrow disappears and a green signal appears."
    },
    {
        category: "Signals",
        question: "A green arrow means:",
        options: ["Stop and wait for a green light", "You may turn in the direction of the arrow; oncoming traffic should be stopped", "You must yield to all turning traffic", "The lane is closed"],
        correct: 1,
        explanation: "A green arrow is a protected turn. You may go in the arrow’s direction. Still watch for pedestrians and vehicles that may not stop."
    },
    {
        category: "Signals",
        question: "In California, you may turn right on a red light:",
        options: ["Never", "After a complete stop, unless a sign or red arrow prohibits it, and only when it is safe", "Only on one-way streets", "Only between 7 a.m. and 7 p.m."],
        correct: 1,
        explanation: "After a full stop, you may turn right on red unless a sign or red arrow forbids it. Yield to pedestrians, bicyclists, and other traffic."
    },
    {
        category: "Signals",
        question: "You may turn left on a red light only if:",
        options: ["You are turning from a two-way street onto a two-way street", "You are turning from a one-way street onto another one-way street, after stopping, and it is allowed", "There is no oncoming traffic", "You honk first"],
        correct: 1,
        explanation: "Left on red is allowed from a one-way street onto a one-way street after a complete stop, unless a sign prohibits it."
    },
    {
        category: "Lane markings",
        question: "A solid yellow line on your side of the center line means:",
        options: ["You may pass if the way is clear", "You may not pass", "Passing is allowed only at night", "You must stop"],
        correct: 1,
        explanation: "A solid yellow line on your side means no passing. You may cross it to turn left into a driveway, private road, or alley when safe."
    },
    {
        category: "Lane markings",
        question: "Double solid yellow lines mean:",
        options: ["Passing is allowed for the side with the broken line", "No passing in either direction", "You may pass during daylight only", "The lane is for buses only"],
        correct: 1,
        explanation: "Double solid yellow lines mean no passing either way. You may cross them to turn left into or out of a driveway or private road, or to make a U-turn where allowed."
    },
    {
        category: "Lane markings",
        question: "Broken yellow lines between opposing lanes mean:",
        options: ["No passing at any time", "Passing is allowed if it is safe and legal", "You must stay in the right lane", "The road is one-way"],
        correct: 1,
        explanation: "A broken yellow line means you may pass if the way is clear and it is safe."
    },
    {
        category: "Lane markings",
        question: "Double solid white lines mean:",
        options: ["You may change lanes if you signal", "You must not cross them", "Passing is allowed", "Parking is allowed"],
        correct: 1,
        explanation: "Double solid white lines separate lanes going the same direction when lane changes are prohibited. Do not cross them."
    },
    {
        category: "Lane markings",
        question: "A two-way left-turn lane in the center of the road is for:",
        options: ["Passing slow traffic", "Driving through for several blocks", "Starting or finishing a left turn or U-turn, for no more than 200 feet", "HOV traffic only"],
        correct: 2,
        explanation: "The center left-turn lane is only for left turns and U-turns. Do not travel more than 200 feet in it, and yield to vehicles already in the lane."
    },
    {
        category: "Right-of-way",
        question: "You must yield to pedestrians:",
        options: ["Only at marked crosswalks", "Only when a crossing guard is present", "At all crosswalks, marked or unmarked", "Only if they have already entered your half of the street"],
        correct: 2,
        explanation: "Pedestrians have the right-of-way at intersections and crosswalks whether the crosswalk is marked or not. Stop behind the limit line or crosswalk."
    },
    {
        category: "Right-of-way",
        question: "At a four-way stop, if two vehicles arrive at the same time, you should:",
        options: ["Go first if you are larger", "Yield to the vehicle on your right", "Wave the other driver through and go", "Honk and proceed"],
        correct: 1,
        explanation: "The first vehicle to arrive goes first. If you arrive at the same time, yield to the driver on your right."
    },
    {
        category: "Right-of-way",
        question: "When entering a roundabout, you must:",
        options: ["Stop in the circle until traffic clears", "Yield to traffic already in the roundabout and travel counterclockwise", "Enter at highway speed", "Always turn left"],
        correct: 1,
        explanation: "Yield to vehicles, bicyclists, and pedestrians already in the roundabout. Enter when there is a gap and go counterclockwise."
    },
    {
        category: "Right-of-way",
        question: "When an emergency vehicle with a siren and red lights approaches, you must:",
        options: ["Speed up to get out of the way", "Pull to the right edge of the road and stop", "Stop in the lane you are in", "Follow the emergency vehicle to help"],
        correct: 1,
        explanation: "Drive to the right edge and stop until the emergency vehicle has passed. If you are in an intersection, continue through it first, then pull over."
    },
    {
        category: "Right-of-way",
        question: "If you are in an intersection when you see an emergency vehicle coming, you should:",
        options: ["Stop immediately in the intersection", "Continue through the intersection, then pull to the right and stop", "Make a U-turn", "Follow the emergency vehicle"],
        correct: 1,
        explanation: "Do not block the intersection. Clear it, then pull to the right and stop."
    },
    {
        category: "Right-of-way",
        question: "At a T-intersection, who has the right-of-way?",
        options: ["The vehicle turning left", "Traffic on the through road", "Whoever arrives first, always", "The larger vehicle"],
        correct: 1,
        explanation: "Vehicles on the through road have the right-of-way. Drivers on the ending road must yield."
    },
    {
        category: "Right-of-way",
        question: "You must stop for a school bus with flashing red lights:",
        options: ["Only if you are behind the bus", "From either direction, unless the bus is on the other side of a divided or multilane highway", "Only if children are visible", "Only in school zones"],
        correct: 1,
        explanation: "Stop from either direction while the red lights flash. You do not need to stop if the bus is on the other side of a divided or multilane highway (two or more lanes each way)."
    },
    {
        category: "Right-of-way",
        question: "Yellow flashing lights on a school bus mean:",
        options: ["You may pass at any speed", "The bus is preparing to stop; slow down and prepare to stop", "The bus is empty", "You must stop immediately from 500 feet away"],
        correct: 1,
        explanation: "Yellow flashing lights warn that the bus is about to stop to let children off. Slow down and be ready to stop."
    },
    {
        category: "Parking",
        question: "When parking downhill next to a curb, turn your front wheels:",
        options: ["Away from the curb", "Toward the curb", "Straight ahead", "Either way is fine"],
        correct: 1,
        explanation: "Headed downhill, turn the front wheels into the curb (or toward the right edge of the road) so the vehicle rolls into the curb if the brakes fail. Set the parking brake."
    },
    {
        category: "Parking",
        question: "When parking uphill next to a curb, turn your front wheels:",
        options: ["Toward the curb", "Away from the curb", "Straight ahead", "Toward the sidewalk"],
        correct: 1,
        explanation: "Headed uphill with a curb, turn the wheels away from the curb and let the vehicle roll back a few inches so a wheel gently touches the curb. Set the parking brake."
    },
    {
        category: "Parking",
        question: "When parking uphill or downhill with no curb, turn your wheels:",
        options: ["Toward the center of the road", "To the right, toward the edge of the road", "Straight ahead", "Away from the shoulder"],
        correct: 1,
        explanation: "With no curb, turn the wheels to the right so the vehicle would roll away from traffic if the brakes fail."
    },
    {
        category: "Parking",
        question: "When you parallel park, your vehicle should be no farther from the curb than:",
        options: ["6 inches", "12 inches", "18 inches", "24 inches"],
        correct: 2,
        explanation: "Park parallel and within 18 inches of the curb."
    },
    {
        category: "Parking",
        question: "A red painted curb means:",
        options: ["Loading zone only", "Limited-time parking", "No stopping, standing, or parking (except buses at a marked bus zone)", "Disabled parking"],
        correct: 2,
        explanation: "Red means no stopping, standing, or parking. Buses may stop at a red zone marked for buses only."
    },
    {
        category: "Parking",
        question: "A blue painted curb means parking is reserved for:",
        options: ["Loading freight", "Disabled persons with a special placard or plate", "Electric vehicles only", "Short passenger drop-off"],
        correct: 1,
        explanation: "Blue curbs are for a disabled person, or someone driving a disabled person, with a special placard or license plate."
    },
    {
        category: "Parking",
        question: "A white painted curb means you may:",
        options: ["Park all day", "Stop only long enough to pick up or drop off passengers", "Load freight only", "Park if you have a disabled placard"],
        correct: 1,
        explanation: "White means stop only long enough to pick up or drop off passengers."
    },
    {
        category: "Parking",
        question: "A green painted curb means:",
        options: ["No parking at any time", "Park for a limited time, as posted", "Taxi stand only", "Loading zone for trucks"],
        correct: 1,
        explanation: "Green means limited-time parking. The time limit is on a sign or painted on the curb."
    },
    {
        category: "Parking",
        question: "A yellow painted curb is generally a:",
        options: ["Disabled space", "Passenger drop-off only", "Loading zone for passengers and freight", "Fire lane"],
        correct: 2,
        explanation: "Yellow is a loading zone. Do not stay longer than posted. Noncommercial drivers are usually required to stay with the vehicle."
    },
    {
        category: "Parking",
        question: "It is illegal to park:",
        options: ["Within 15 feet of a fire hydrant", "More than 50 feet from a corner", "Along a broken yellow line", "On a one-way street"],
        correct: 0,
        explanation: "Do not park within 15 feet of a fire hydrant or a fire station driveway, among other restrictions listed in the handbook."
    },
    {
        category: "Turns & signaling",
        question: "You should signal before a turn for at least:",
        options: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correct: 1,
        explanation: "Signal at least 100 feet before you turn. Also signal before every lane change and before pulling to or from a curb."
    },
    {
        category: "Turns & signaling",
        question: "Before changing lanes on a freeway, you should signal for at least:",
        options: ["1 second", "3 seconds", "5 seconds", "10 seconds"],
        correct: 2,
        explanation: "On a freeway, signal at least five seconds before you change lanes."
    },
    {
        category: "Turns & signaling",
        question: "To make a right turn, you should:",
        options: ["Swing wide into the left lane, then turn", "Drive close to the right edge of the road", "Turn from any lane", "Enter the bike lane a full block before the turn"],
        correct: 1,
        explanation: "Stay close to the right edge. You may enter a bike lane within 200 feet of the turn after checking for bicyclists."
    },
    {
        category: "Turns & signaling",
        question: "When making a left turn, you should turn into:",
        options: ["Any lane you choose", "The nearest lane going in your direction", "The farthest lane to leave room for others", "The oncoming lane, then merge"],
        correct: 1,
        explanation: "Turn into the nearest lane going in your direction, then change lanes if you need a different lane."
    },
    {
        category: "Turns & signaling",
        question: "You may make a U-turn:",
        options: ["Across a double yellow line anywhere", "On a freeway whenever traffic is light", "In a residential district if no vehicle is approaching within 200 feet, unless a sign prohibits it", "On a hill where you cannot see 200 feet"],
        correct: 2,
        explanation: "U-turns are allowed in many residential areas if nothing is coming within 200 feet. Never make a U-turn where you cannot see clearly for 200 feet, or on a freeway."
    },
    {
        category: "Turns & signaling",
        question: "Never make a U-turn:",
        options: ["At a green light in a residential area", "When you cannot see clearly for 200 feet in each direction", "From a left-turn lane", "At an opening in a divided highway where allowed"],
        correct: 1,
        explanation: "Do not make a U-turn on a curve or hill, or anywhere you cannot see 200 feet in each direction, or where a sign prohibits it."
    },
    {
        category: "Safe driving",
        question: "The three-second rule is used to:",
        options: ["Time a yellow light", "Keep a safe following distance", "Decide when to honk", "Judge parking space length"],
        correct: 1,
        explanation: "When the vehicle ahead passes a fixed point, you should reach that point no sooner than three seconds later. Increase the gap in rain, fog, or at night."
    },
    {
        category: "Safe driving",
        question: "In fog, rain, or snow, you should use:",
        options: ["High-beam headlights", "Parking lights only", "Low-beam headlights", "Hazard lights while driving at full speed"],
        correct: 2,
        explanation: "Use low beams. High beams reflect off fog, rain, and snow and make it harder to see. If you need wipers, you must turn on low-beam headlights."
    },
    {
        category: "Safe driving",
        question: "Dim your high beams when an oncoming vehicle is within:",
        options: ["100 feet", "300 feet", "500 feet", "1,000 feet"],
        correct: 2,
        explanation: "Dim high beams within 500 feet of an oncoming vehicle, and within 300 feet of a vehicle you are following."
    },
    {
        category: "Safe driving",
        question: "Dim your high beams when you are following another vehicle within:",
        options: ["100 feet", "200 feet", "300 feet", "500 feet"],
        correct: 2,
        explanation: "Switch to low beams within 300 feet of a vehicle you are following so you do not blind the driver in the rearview mirror."
    },
    {
        category: "Safe driving",
        question: "You must use headlights:",
        options: ["Only when it is completely dark", "From 30 minutes after sunset until 30 minutes before sunrise, and when you cannot see 1,000 feet ahead", "Only on freeways", "Only in the rain"],
        correct: 1,
        explanation: "Use headlights beginning 30 minutes after sunset until 30 minutes before sunrise, when you cannot see 1,000 feet, in bad weather, and in tunnels and on mountain roads."
    },
    {
        category: "Safe driving",
        question: "It is illegal to drive using:",
        options: ["Low beams in the rain", "Headlights in a tunnel on a sunny day", "Only parking lights", "High beams on a dark rural road with no other cars"],
        correct: 2,
        explanation: "You may not drive with only parking lights. Use headlights in low light and poor weather."
    },
    {
        category: "Safe driving",
        question: "If your vehicle starts to hydroplane, you should:",
        options: ["Brake hard", "Steer sharply", "Ease off the accelerator and steer straight", "Accelerate to regain traction"],
        correct: 2,
        explanation: "Ease off the gas and keep the wheel straight until the tires grip again. Do not brake or jerk the wheel."
    },
    {
        category: "Safe driving",
        question: "If a tire blows out while you are driving, you should:",
        options: ["Brake hard immediately", "Grip the steering wheel firmly and ease off the accelerator", "Swerve to the shoulder", "Shift into reverse"],
        correct: 1,
        explanation: "Hold the wheel firmly, ease off the gas, and let the vehicle slow. Steer to a safe place once you have control. Do not slam on the brakes."
    },
    {
        category: "Safe driving",
        question: "If you miss your freeway exit, you should:",
        options: ["Stop and back up", "Make a U-turn on the freeway", "Continue to the next exit", "Cross the median if it looks clear"],
        correct: 2,
        explanation: "Never stop, back up, or turn around on a freeway. Go to the next exit."
    },
    {
        category: "Safe driving",
        question: "When merging onto a freeway, you should:",
        options: ["Stop at the end of the on-ramp", "Match the speed of traffic and merge into a gap", "Enter as slowly as possible", "Use the shoulder to get up to speed"],
        correct: 1,
        explanation: "Use the acceleration lane to match freeway speed and merge smoothly into a gap. Do not stop on the ramp unless traffic forces you to."
    },
    {
        category: "Safe driving",
        question: "The recommended hand position on the steering wheel is:",
        options: ["10 and 2 o’clock", "9 and 3 o’clock", "12 o’clock only", "Wherever feels comfortable"],
        correct: 1,
        explanation: "Place your hands at 9 and 3 o’clock (or 8 and 4). This gives control and reduces injury if the airbag deploys."
    },
    {
        category: "Safe driving",
        question: "If you cannot see farther than 100 feet in heavy rain or snow, it is not safe to drive faster than:",
        options: ["15 mph", "25 mph", "30 mph", "45 mph"],
        correct: 2,
        explanation: "If you cannot see more than 100 feet ahead, do not drive faster than 30 mph. Slow further if needed, or pull off the road until conditions improve."
    },
    {
        category: "Sharing the road",
        question: "When you cannot change lanes to pass a bicyclist, you must allow at least:",
        options: ["1 foot", "3 feet", "6 feet", "One car width"],
        correct: 1,
        explanation: "Give at least three feet of space. If you cannot, wait until you can pass safely."
    },
    {
        category: "Sharing the road",
        question: "You may drive in a bicycle lane:",
        options: ["Anytime traffic is slow", "Only within 200 feet of a turn, or when parking or entering/leaving the road where permitted", "To pass a car on the right", "During HOV hours"],
        correct: 1,
        explanation: "Bike lanes are for bicyclists. Motorists may enter only to park where allowed, enter or leave the road, or turn within 200 feet of an intersection. Check blind spots first."
    },
    {
        category: "Sharing the road",
        question: "In California, motorcycle lane splitting is:",
        options: ["Always illegal", "Legal; motorcyclists may ride between lanes of slow-moving or stopped traffic", "Legal only on surface streets", "Legal only for police"],
        correct: 1,
        explanation: "Lane splitting is legal in California. Give motorcyclists space, check mirrors and blind spots, and never try to pass a motorcycle in the same lane."
    },
    {
        category: "Sharing the road",
        question: "You should follow a motorcycle at least:",
        options: ["1 second behind", "2 seconds behind", "3 seconds behind", "6 seconds behind"],
        correct: 2,
        explanation: "Allow at least a three-second following distance. Motorcycles can stop quickly, and road hazards affect them more."
    },
    {
        category: "Sharing the road",
        question: "A slow-moving vehicle emblem is:",
        options: ["A blue square", "An orange and red triangle", "A white diamond", "A green pentagon"],
        correct: 1,
        explanation: "An orange and red triangle on the back marks a slow-moving vehicle, often traveling 25 mph or less."
    },
    {
        category: "Sharing the road",
        question: "A diamond-shaped sign on a truck means:",
        options: ["The truck is extra wide", "The load may be hazardous (gas, explosives, etc.)", "The truck may use HOV lanes", "The truck is making frequent stops"],
        correct: 1,
        explanation: "Hazardous-load placards are diamond-shaped. Those vehicles must stop before crossing railroad tracks."
    },
    {
        category: "Sharing the road",
        question: "It is illegal to follow a fire engine, ambulance, or police vehicle with lights or siren on closer than:",
        options: ["100 feet", "200 feet", "300 feet", "500 feet"],
        correct: 2,
        explanation: "Do not follow within 300 feet of an emergency vehicle that is using a siren or flashing lights."
    },
    {
        category: "Laws",
        question: "California’s Move Over law requires you to:",
        options: ["Move into the left lane whenever you drive slowly", "Move over and slow down for stopped emergency and road-work vehicles", "Always drive in the right lane", "Yield only to fire trucks"],
        correct: 1,
        explanation: "When you approach a stationary emergency or road-work vehicle with flashing lights, move over a lane if you can, and slow down."
    },
    {
        category: "Laws",
        question: "You may use an HOV (carpool) lane:",
        options: ["Anytime, in any vehicle", "Only during posted hours, and only if you meet the occupant or eligibility rules on the signs", "Only on weekends", "Only in a hybrid, with no passengers needed"],
        correct: 1,
        explanation: "HOV rules—minimum number of people, hours, and eligible vehicles—are posted at the on-ramp or along the road. Use designated entrances and exits."
    },
    {
        category: "Laws",
        question: "If five or more vehicles are following you on a two-lane road where passing is unsafe, you should:",
        options: ["Speed up", "Use a turnout or pull over when safe to let them pass", "Brake-check to create space", "Drive in the center of the road"],
        correct: 1,
        explanation: "Use a turnout or lane to let others pass when you are driving slowly and five or more vehicles are behind you."
    },
    {
        category: "Laws",
        question: "If you are driving slower than other traffic on a multilane road, you should:",
        options: ["Stay in the left lane", "Drive in the right lane", "Straddle two lanes", "Use the HOV lane"],
        correct: 1,
        explanation: "Slower traffic keeps right. If someone wants to pass, move to the right when you can do so safely."
    },
    {
        category: "Laws",
        question: "Fines are doubled in highway construction or maintenance zones:",
        options: ["Only at night", "When workers are present", "Only on freeways", "Never; fines are the same"],
        correct: 1,
        explanation: "Fines are doubled in construction or maintenance zones when workers are present, and in Safety Enhanced-Double Fine Zones."
    },
    {
        category: "Laws",
        question: "Cargo that extends more than 4 feet from the rear bumper must display:",
        options: ["A license plate light", "A 12-inch red or fluorescent orange square flag", "A blue pennant", "Nothing during the day"],
        correct: 1,
        explanation: "A 12-inch red or fluorescent orange square flag is required. At night the cargo must also be marked with two red lights."
    },
    {
        category: "Phones & distractions",
        question: "If you are 18 or older, you may use a cell phone while driving only:",
        options: ["When stopped at a red light", "In hands-free mode, mounted so it does not block your view", "For navigation while holding the phone", "If you are driving under 25 mph"],
        correct: 1,
        explanation: "Handheld phone use is illegal. Adults may use a phone hands-free. Mount it on the windshield, dashboard, or console without blocking the view. A single swipe or tap is allowed."
    },
    {
        category: "Phones & distractions",
        question: "Drivers under 18 may use a cell phone while driving:",
        options: ["Hands-free only", "Only to change music", "Only to call for emergency assistance", "Whenever a parent is in the car"],
        correct: 2,
        explanation: "Minors may not use a phone or wireless device to call or text while driving, except to call for emergency help."
    },
    {
        category: "Alcohol & drugs",
        question: "The legal BAC limit for drivers 21 and older (non-commercial) is:",
        options: ["0.01%", "0.04%", "0.08%", "0.10%"],
        correct: 2,
        explanation: "It is illegal to drive with a BAC of 0.08% or higher if you are 21 or older. You can still be arrested for DUI at a lower BAC if alcohol affects your driving."
    },
    {
        category: "Alcohol & drugs",
        question: "For drivers under 21, it is illegal to drive with a BAC of:",
        options: ["0.08% or higher only", "0.04% or higher", "0.01% or higher", "0.10% or higher"],
        correct: 2,
        explanation: "California’s zero-tolerance rule: 0.01% or higher is illegal for drivers under 21."
    },
    {
        category: "Alcohol & drugs",
        question: "The BAC limit for a commercial driver is:",
        options: ["0.01%", "0.04%", "0.08%", "0.10%"],
        correct: 1,
        explanation: "It is illegal to drive a commercial vehicle (or a vehicle for hire with a passenger) with a BAC of 0.04% or higher."
    },
    {
        category: "Alcohol & drugs",
        question: "Implied consent means that if you drive in California, you agree to:",
        options: ["Let anyone borrow your car", "Take a chemical test (blood or urine) if a law enforcement officer suspects DUI", "Carry extra insurance", "Attend traffic school every year"],
        correct: 1,
        explanation: "If an officer believes you are driving under the influence, they may ask for a blood or urine test. Refusing leads to a one-year suspension or revocation of your driving privilege."
    },
    {
        category: "Alcohol & drugs",
        question: "An open container of alcohol in a vehicle must be:",
        options: ["Held by a passenger, not the driver", "Kept in the glove box", "Kept in the trunk or an area where passengers do not sit", "Allowed if the driver is not drinking"],
        correct: 2,
        explanation: "Open alcohol or cannabis containers belong in the trunk or another area that is not for passengers. The glove box does not count. Sealed, unopened containers are OK."
    },
    {
        category: "Alcohol & drugs",
        question: "It is illegal to drive under the influence of:",
        options: ["Alcohol only", "Illegal drugs only", "Alcohol, illegal drugs, and legal medications that affect your ability to drive", "Only beverages over 5% alcohol"],
        correct: 2,
        explanation: "DUI covers alcohol and any drug that affects safe driving, including prescriptions and over-the-counter medicine."
    },
    {
        category: "Seat belts & children",
        question: "Children who are under 8 years old, or under 4 feet 9 inches tall, must generally:",
        options: ["Ride in the front seat with a seat belt", "Be secured in a child passenger restraint system in a rear seat", "Use a booster only on the freeway", "Sit on a cushion"],
        correct: 1,
        explanation: "They must ride in an approved child restraint in the back seat, with limited exceptions (no rear seat, all rear seats taken by younger children, medical reasons, and similar cases in the handbook)."
    },
    {
        category: "Seat belts & children",
        question: "A child under 2 years old who is under 40 pounds and under 40 inches tall must ride:",
        options: ["In a forward-facing seat", "In a rear-facing child passenger restraint system", "With a seat belt only", "In the front seat facing forward"],
        correct: 1,
        explanation: "Secure that child in a rear-facing restraint. A rear-facing seat may not be used in the front of a vehicle with an active passenger airbag."
    },
    {
        category: "License & permit",
        question: "The minimum age to apply for a California instruction permit is:",
        options: ["15 years", "15½ years", "16 years", "18 years"],
        correct: 1,
        explanation: "You must be at least 15½, complete driver education, and have a parent or guardian sign if you are under 18."
    },
    {
        category: "License & permit",
        question: "A minor with an instruction permit must be supervised by a California-licensed driver who is at least:",
        options: ["18 years old", "21 years old", "25 years old", "30 years old"],
        correct: 2,
        explanation: "The supervising driver must be at least 25 for minors and sit close enough to take control if needed. Adults 18 and older may practice with a licensed driver 18 or older."
    },
    {
        category: "License & permit",
        question: "Before a behind-the-wheel test, a minor must practice driving at least:",
        options: ["20 hours, including 5 at night", "30 hours, all in daylight", "50 hours, including 10 at night", "100 hours"],
        correct: 2,
        explanation: "Practice at least 50 hours with a licensed driver 25 or older. Ten of those hours must be at night."
    },
    {
        category: "License & permit",
        question: "During the first 12 months, a provisional licensee generally may not drive:",
        options: ["On freeways", "Between 11 p.m. and 5 a.m., or with passengers under 20, unless an exception applies", "Outside their home county", "Faster than 55 mph"],
        correct: 1,
        explanation: "Provisional drivers cannot drive 11 p.m.–5 a.m. or carry passengers under 20 unless a parent/guardian or a licensed driver 25 or older is in the car, or another listed exception applies."
    },
    {
        category: "License & permit",
        question: "If you fail the knowledge test, you may try again:",
        options: ["Unlimited times the same day", "Up to three times per application; minors must wait seven days (not counting the day of failure)", "Once per year", "Only after repeating driver education"],
        correct: 1,
        explanation: "You get three attempts per application. After a third failure you must reapply. Minors wait seven days to retest, not including the day they failed."
    },
    {
        category: "Insurance & collisions",
        question: "California’s minimum auto liability coverage is currently at least:",
        options: ["$15,000 / $30,000 / $5,000", "$30,000 for one person injured or killed, $60,000 for more than one person, and $15,000 for property damage", "$50,000 / $100,000 / $25,000", "$5,000 property damage only"],
        correct: 1,
        explanation: "The handbook requires at least $30,000 for a single death or injury, $60,000 for more than one person, and $15,000 for property damage. Carry proof when you drive."
    },
    {
        category: "Insurance & collisions",
        question: "You must report a collision to the DMV within 10 days if:",
        options: ["There is any paint transfer", "Anyone was injured or killed, or property damage exceeds $1,000", "A police officer was not present", "You were not at fault"],
        correct: 1,
        explanation: "File with DMV within 10 days when anyone is injured or killed (even minor injuries) or property damage is more than $1,000."
    },
    {
        category: "Insurance & collisions",
        question: "If anyone is injured or killed in a collision, you must also report it to law enforcement within:",
        options: ["1 hour", "24 hours", "10 days", "30 days"],
        correct: 1,
        explanation: "Report to law enforcement within 24 hours if anyone is injured or killed. Your insurer or lawyer can file that report."
    },
    {
        category: "Insurance & collisions",
        question: "If you hit a parked car and cannot find the owner, you should:",
        options: ["Leave quietly if damage looks minor", "Leave a note with your name, phone number, and address, then report it to law enforcement", "Wait no more than five minutes, then go", "Call your insurance company only"],
        correct: 1,
        explanation: "Leaving the scene is a hit-and-run. Leave your contact information securely on the vehicle or property and report the collision to police."
    },
    {
        category: "Insurance & collisions",
        question: "If you sell or transfer your vehicle, you must notify the DMV within:",
        options: ["24 hours", "5 days", "10 days", "30 days"],
        correct: 1,
        explanation: "Notify DMV within 5 days after you sell or transfer the vehicle so you are not held responsible later."
    },
    {
        category: "Railroad",
        question: "When railroad crossing lights are flashing, you must:",
        options: ["Slow down and cross if no train is visible", "Stop and wait until the lights stop flashing, even if the gate rises", "Drive around lowered gates if you do not see a train", "Honk and proceed"],
        correct: 1,
        explanation: "Stop. Do not go until the red lights stop flashing. Never go around or under lowering gates."
    },
    {
        category: "Railroad",
        question: "If a person or crossing device warns that a train is coming, stop at least:",
        options: ["5 feet from the nearest track", "10 feet from the nearest track", "15 feet from the nearest track", "50 feet from the nearest track"],
        correct: 2,
        explanation: "Stop at least 15 feet from the nearest track. Look both ways; many crossings have more than one track."
    },
    {
        category: "Emergency",
        question: "If you are pulled over by law enforcement, you should:",
        options: ["Stop in the left lane", "Signal right, pull onto the right shoulder, and turn off the radio", "Get out of the car immediately", "Continue to the next exit before stopping"],
        correct: 1,
        explanation: "Signal right to show you see the officer, pull fully onto the right shoulder (even from an HOV lane), stop in a well-lit area if you can, and turn off the radio."
    },
    {
        category: "Emergency",
        question: "Never start a gasoline-powered vehicle:",
        options: ["On a cold morning", "Inside a closed garage", "After filling the tank", "With the headlights on"],
        correct: 1,
        explanation: "Exhaust contains carbon monoxide, a deadly odorless gas. Do not run the engine in a closed garage."
    }
];
