// California motorcycle (M1/M2) practice questions based on the California Motorcycle Handbook.
// Not an official DMV test. Confirm current rules at dmv.ca.gov.

const MOTORCYCLE_BANK = [
    {
        category: "License classes",
        question: "A Class M1 license lets you operate:",
        options: ["Only mopeds and motorized bicycles", "Any two-wheel motorcycle, motor-driven cycle, or motorized scooter, plus all Class M2 vehicles", "Any passenger car or pickup", "Only three-wheel motorcycles"],
        correct: 1,
        explanation: "M1 covers two-wheel motorcycles, motor-driven cycles, motorized scooters, and everything allowed under M2."
    },
    {
        category: "License classes",
        question: "A Class M2 license lets you operate:",
        options: ["Any two-wheel motorcycle", "A motorized bicycle, moped, or motorized scooter", "Any vehicle a Class C license covers", "Only off-road dirt bikes"],
        correct: 1,
        explanation: "M2 is limited to motorized bicycles, mopeds, and motorized scooters—not full-size two-wheel motorcycles."
    },
    {
        category: "License classes",
        question: "With only a Class C driver’s license, you may operate:",
        options: ["Any two-wheel motorcycle on the highway", "A motorcycle with a sidecar, a three-wheel motorcycle, or a motorized scooter", "A moped but not a motorized scooter", "No two- or three-wheel motor vehicles"],
        correct: 1,
        explanation: "Class C covers sidecar and three-wheel motorcycles plus motorized scooters. Two-wheel motorcycles need M1."
    },
    {
        category: "License classes",
        question: "A motor-driven cycle is a motorcycle with an engine smaller than:",
        options: ["50 cc", "100 cc", "150 cc", "250 cc"],
        correct: 2,
        explanation: "A motor-driven cycle is a motorcycle with a motor smaller than 150 cc. Posted signs may ban them from freeways."
    },
    {
        category: "License classes",
        question: "In California, a motorized bicycle or moped is generally limited to no more than:",
        options: ["15 mph on level ground", "25 mph on level ground", "30 mph on level ground", "45 mph on level ground"],
        correct: 2,
        explanation: "A moped is a two- or three-wheeled device capable of no more than 30 mph on level ground, with a small motor and (usually) pedals."
    },
    {
        category: "License & permit",
        question: "An M1 or M2 instruction permit does not allow you to:",
        options: ["Ride on city streets during the day", "Carry passengers, ride on a freeway, or ride at night", "Practice in a parking lot", "Ride alone on surface streets"],
        correct: 1,
        explanation: "The motorcycle instruction permit bans passengers, freeway driving, and nighttime riding."
    },
    {
        category: "License & permit",
        question: "Applicants under 21 must complete a California Motorcyclist Safety Program course:",
        options: ["Only if they fail the skills test twice", "Before they can receive a motorcycle instruction permit", "Only if they want a Class M2 license", "Never—training is optional at every age"],
        correct: 1,
        explanation: "Riders under 21 must finish a CMSP course before getting a motorcycle instruction permit."
    },
    {
        category: "License & permit",
        question: "A Certificate of Completion of Motorcycle Training (DL 389) is valid for:",
        options: ["30 days", "6 months", "12 months from the issue date", "Until your next birthday"],
        correct: 2,
        explanation: "DMV accepts a DL 389 for 12 months from the date it is issued."
    },
    {
        category: "License & permit",
        question: "DMV may waive the motorcycle skills test if you submit:",
        options: ["Any out-of-state motorcycle course card", "A DL 389 from a California Motorcyclist Safety Program course", "Proof you have owned a motorcycle for a year", "A Class C license only"],
        correct: 1,
        explanation: "Only a current California CMSP DL 389 can waive the DMV skills test. Out-of-state courses do not."
    },
    {
        category: "License & permit",
        question: "To get an M1 or M2 license you must pass:",
        options: ["Only the motorcycle skills test", "The driver knowledge test, the motorcycle knowledge test, and a skills test (or submit a valid DL 389)", "Only an eye exam", "A car road test in a sedan"],
        correct: 1,
        explanation: "You need the auto knowledge test, the motorcycle knowledge test, and either a skills test or a valid CMSP certificate."
    },
    {
        category: "Protective gear",
        question: "In California, a rider and any passenger must wear:",
        options: ["Any hat that covers the ears", "A U.S. DOT-compliant motorcycle helmet that is fastened and fits", "A helmet only on freeways", "Eye protection but a helmet is optional over 18"],
        correct: 1,
        explanation: "State law requires a DOT-compliant helmet, properly fitted and strapped, for both the operator and every passenger."
    },
    {
        category: "Protective gear",
        question: "A novelty or “beanie” helmet is:",
        options: ["Legal if it looks like a motorcycle helmet", "Not a U.S. DOT-compliant helmet and should not be used", "Required for passengers under 18 only", "Better than a full-face helmet in hot weather"],
        correct: 1,
        explanation: "Novelty helmets often lack real impact protection and the required DOT certification. Wear a certified helmet."
    },
    {
        category: "Protective gear",
        question: "Which helmet style generally offers the most protection?",
        options: ["A half (shorty) helmet", "A three-quarter open-face helmet", "A full-face helmet", "A bicycle helmet"],
        correct: 2,
        explanation: "A full-face helmet covers the chin and face as well as the head, giving the most protection."
    },
    {
        category: "Protective gear",
        question: "A legal motorcycle helmet should have:",
        options: ["A racing sticker on the visor", "Manufacturer-applied DOT lettering on the back", "A built-in camera", "No chin strap so it is easier to remove"],
        correct: 1,
        explanation: "Look for the manufacturer’s DOT marking on the back. The helmet must also fit snugly and fasten with the straps."
    },
    {
        category: "Protective gear",
        question: "Goggles or a face shield are important because:",
        options: ["They replace a helmet", "Wind, dust, rain, and debris can impair your vision", "They are required instead of a headlight", "They keep the engine cooler"],
        correct: 1,
        explanation: "Unprotected eyes water and blur. Use a face shield, goggles, or glasses made for riding—in addition to a helmet."
    },
    {
        category: "Protective gear",
        question: "The clothing that helps other drivers see you best is:",
        options: ["All black leather", "Bright orange, red, yellow, or green, with reflective material", "Camouflage", "A white T-shirt only at night"],
        correct: 1,
        explanation: "Most crashes happen in daylight. Bright and reflective gear—and a bright helmet—make you easier to see."
    },
    {
        category: "Protective gear",
        question: "Proper riding boots should:",
        options: ["Be open-toed for cooling", "Cover the ankle and have slip-resistant soles", "Have steel spikes for gravel", "Be two sizes large so they come off in a crash"],
        correct: 1,
        explanation: "Over-the-ankle boots protect against burns and injury and help you keep your footing at a stop."
    },
    {
        category: "Protective gear",
        question: "Gloves are recommended because they:",
        options: ["Replace the need for a clutch lever", "Improve grip and protect your hands in a fall", "Are only for cold weather", "Must be worn instead of a helmet"],
        correct: 1,
        explanation: "Gloves give a better grip on the controls and protect your hands, which often hit the ground first in a crash."
    },
    {
        category: "Pre-ride check",
        question: "Before every ride you should check:",
        options: ["Only the fuel gauge", "Tires, controls, lights, oil and fluids, chassis, and stand (T-CLOCS)", "Only whether the radio works", "Nothing if you rode yesterday"],
        correct: 1,
        explanation: "A T-CLOCS check catches problems while you are still parked instead of after they become emergencies."
    },
    {
        category: "Pre-ride check",
        question: "If a tire looks low or damaged during a pre-ride check, you should:",
        options: ["Ride slowly to the next gas station", "Fix or replace it before you ride", "Add air only if you will stay on surface streets", "Ignore it if the other tire is fine"],
        correct: 1,
        explanation: "A bad tire can cause a crash. Do not start a ride until tires are properly inflated and in good condition."
    },
    {
        category: "Vehicle control",
        question: "The correct riding posture is to sit so that:",
        options: ["Your arms are locked straight to hold you up", "You can use your arms to steer, with a slight bend in the elbows", "You lean back against the sissy bar at all times", "Your feet dangle off the pegs for comfort"],
        correct: 1,
        explanation: "Sit far enough forward that your arms are slightly bent. Arms should steer, not support your weight."
    },
    {
        category: "Vehicle control",
        question: "Keep your knees:",
        options: ["Splayed wide for balance", "Against the gas tank to help you balance in turns", "Locked over the headlight", "Off the motorcycle except when stopping"],
        correct: 1,
        explanation: "Knees against the tank help you hold the motorcycle and stay balanced through turns."
    },
    {
        category: "Vehicle control",
        question: "While moving, your feet should:",
        options: ["Drag lightly for extra balance", "Stay firmly on the footrests, near the controls", "Point straight down toward the pavement", "Rest on the passenger pegs"],
        correct: 1,
        explanation: "Dragging a foot or pointing toes down can catch the pavement. Keep feet on the pegs and ready for the controls."
    },
    {
        category: "Vehicle control",
        question: "Hold the throttle with your right wrist:",
        options: ["Bent upward so you always have extra power", "Flat, so you do not roll on extra throttle by accident", "Off the grip except in first gear", "Locked fully open in town"],
        correct: 1,
        explanation: "A flat wrist helps you avoid accidentally adding throttle, especially over bumps."
    },
    {
        category: "Shifting",
        question: "When you come to a stop you should:",
        options: ["Stay in fifth gear to save the clutch", "Remain in first gear so you can move out quickly", "Shift to neutral and take both feet off the ground", "Rev the engine in whatever gear you were using"],
        correct: 1,
        explanation: "Stay in first at a stop so you can leave quickly if a vehicle behind is not slowing."
    },
    {
        category: "Shifting",
        question: "It is best to change gears:",
        options: ["In the middle of every turn for more lean", "Before you start a turn", "Only when going downhill", "By skipping gears whenever possible"],
        correct: 1,
        explanation: "Shift before the turn. A sudden power change to the rear wheel in a turn can cause a skid."
    },
    {
        category: "Shifting",
        question: "The friction zone is:",
        options: ["The oily strip in the center of the lane", "The part of clutch travel between fully engaged and fully released", "The area around a hot muffler", "The space between two cars when lane splitting"],
        correct: 1,
        explanation: "Using the friction zone gives fine control at walking speeds and in tight U-turns."
    },
    {
        category: "Braking",
        question: "In a normal stop you should:",
        options: ["Use only the rear brake so you do not flip", "Use both brakes at the same time and downshift", "Use only the front brake", "Downshift without touching either brake"],
        correct: 1,
        explanation: "Use both brakes every time you slow or stop. That builds the habit you need in an emergency."
    },
    {
        category: "Braking",
        question: "The front brake provides about:",
        options: ["One-quarter of your stopping power", "Half of your stopping power", "Three-quarters of your stopping power", "None of your stopping power in the rain"],
        correct: 2,
        explanation: "The front brake supplies about three-quarters of total stopping power when used properly."
    },
    {
        category: "Braking",
        question: "Grabbing the front brake lever can:",
        options: ["Shorten stopping distance every time", "Lock the front wheel and cause a loss of control", "Warm the engine faster", "Replace a downshift"],
        correct: 1,
        explanation: "Squeeze the front brake firmly and smoothly. Grabbing it can lock the wheel."
    },
    {
        category: "Braking",
        question: "If the front wheel locks while you are stopping, you should:",
        options: ["Hold it locked until you stop", "Release the front brake immediately, then reapply it firmly", "Accelerate to unlock it", "Jump off the motorcycle"],
        correct: 1,
        explanation: "Release, then squeeze again with steady pressure. Do not stay locked on the front brake."
    },
    {
        category: "Braking",
        question: "If you must stop quickly in a curve, the best technique is to:",
        options: ["Grab only the rear brake while leaned over", "Straighten the motorcycle first, then apply maximum braking", "Lay the bike down", "Downshift without braking"],
        correct: 1,
        explanation: "Straighten up so more traction is available for braking, then brake hard. If you must brake while leaned, apply brakes lightly at first."
    },
    {
        category: "Turning",
        question: "The four steps for turning are:",
        options: ["Rev, lean, look, stop", "Slow, look, press, roll", "Stop, signal, swerve, accelerate", "Press, grab, downshift, look"],
        correct: 1,
        explanation: "Slow before the turn, look where you want to go, press the grip to lean, then roll on the throttle through the turn."
    },
    {
        category: "Turning",
        question: "To lean a motorcycle into a normal turn at speed, you:",
        options: ["Pull back on both handlegrips", "Press the handlegrip in the direction of the turn (press left, go left)", "Lean your body the opposite way of the motorcycle", "Use only the rear brake"],
        correct: 1,
        explanation: "Countersteering: press left to lean left and go left; press right to go right."
    },
    {
        category: "Turning",
        question: "In a normal turn, the rider should:",
        options: ["Stay upright while the motorcycle leans", "Lean with the motorcycle at about the same angle", "Hang off the high side", "Look down at the front tire"],
        correct: 1,
        explanation: "Rider and motorcycle lean together in normal turns. Keep your eyes level and look through the turn."
    },
    {
        category: "Turning",
        question: "In a slow, tight turn you should:",
        options: ["Lean your body with the motorcycle as far as possible", "Keep your body more upright and lean only the motorcycle", "Use the front brake hard", "Stand on the pegs"],
        correct: 1,
        explanation: "For slow tight turns, stay more upright and lean the motorcycle under you. Use the friction zone and rear brake."
    },
    {
        category: "Turning",
        question: "During a slow U-turn, dragging the rear brake helps control speed. You should avoid:",
        options: ["Looking through the turn", "Using the friction zone", "Using the front brake, which can tip the motorcycle", "Keeping your feet on the pegs"],
        correct: 2,
        explanation: "Front brake in a tight, slow U-turn can make the bike fall. Use the rear brake and friction zone instead."
    },
    {
        category: "Lane position",
        question: "Each traffic lane gives a motorcycle about how many paths of travel?",
        options: ["One", "Two", "Three", "Five"],
        correct: 2,
        explanation: "Think of a lane as left, center, and right paths. Choose the path that gives the best view and space cushion."
    },
    {
        category: "Lane position",
        question: "The best lane position is:",
        options: ["Always the far left", "Always the center of the lane", "The one that lets you see, be seen, and keep a space cushion—and it can change", "Always the far right so cars can pass"],
        correct: 2,
        explanation: "There is no single best position. Change as traffic, wind, and hazards change."
    },
    {
        category: "Lane position",
        question: "The oily strip in the center of a lane is usually:",
        options: ["The safest place in the rain", "About two feet wide; you can still use the center path by riding just left or right of it", "Required by law for motorcycles", "Where you should put your feet at a stop"],
        correct: 1,
        explanation: "Stay off heavy oil and grease. You can remain in the center third by riding beside that strip."
    },
    {
        category: "Lane position",
        question: "Motorcycles:",
        options: ["Should share a lane side-by-side with a car to save space", "Are entitled to a full lane and should not share it with another vehicle", "Must always ride on the shoulder", "May use sidewalks when traffic is slow"],
        correct: 1,
        explanation: "Cars and motorcycles each need a full lane. Do not ride next to a car in the same lane."
    },
    {
        category: "Following distance",
        question: "In normal conditions, maintain at least a:",
        options: ["One-second following distance", "Two-second following distance", "Six-second following distance", "Half-second following distance"],
        correct: 1,
        explanation: "A two-second gap is the minimum. Count “one-thousand-one, one-thousand-two” from a fixed marker."
    },
    {
        category: "Following distance",
        question: "Open a three-second or greater following distance when:",
        options: ["The pavement is dry and empty", "The pavement is slippery, you cannot see through the vehicle ahead, or traffic is heavy", "You are in an HOV lane", "You are riding faster than 25 mph"],
        correct: 1,
        explanation: "You need more space when stopping takes longer or your view is blocked."
    },
    {
        category: "Following distance",
        question: "If someone is tailgating you, the better response is to:",
        options: ["Speed up until they drop back", "Brake-check them", "Allow them to pass, or slow slightly and open extra space ahead", "Move to the far right of your lane and stop"],
        correct: 2,
        explanation: "Speeding up only creates a faster tailgater. Extra space ahead gives both of you room to stop and may encourage a pass."
    },
    {
        category: "Following distance",
        question: "When you are stopped in traffic, keep well back from the vehicle ahead so that:",
        options: ["You can read their bumper stickers", "You have an escape path if someone behind does not stop or the vehicle ahead rolls back", "Other drivers can occupy your lane", "You can rest both feet on the pavement in fifth gear"],
        correct: 1,
        explanation: "Leave an out. Stay in first gear, watch your mirrors, and be ready to move."
    },
    {
        category: "HOV & tolls",
        question: "In California, motorcycles in carpool (HOV) lanes are:",
        options: ["Never allowed", "Allowed unless a sign prohibits them", "Allowed only with two riders", "Allowed only at night"],
        correct: 1,
        explanation: "Motorcycles may use HOV/carpool lanes unless otherwise posted. Do not cross double lines except at designated openings."
    },
    {
        category: "HOV & tolls",
        question: "A motorcycle towing a trailer:",
        options: ["May travel at any posted freeway speed", "Must not exceed 55 mph, must stay in the right-hand lane(s), and may not use carpool lanes", "Must use the HOV lane", "Is illegal in California"],
        correct: 1,
        explanation: "Trailers change handling and are limited to 55 mph. They stay right and are banned from carpool lanes."
    },
    {
        category: "Passing",
        question: "When you are being passed, you should usually ride in the:",
        options: ["Portion of the lane closest to the passing vehicle", "Center portion of your lane", "Shoulder", "Oncoming lane"],
        correct: 1,
        explanation: "The center path keeps you away from the other vehicle, extended mirrors, thrown objects, and wind blast. Do not move to the far side—that can invite the driver back in too soon."
    },
    {
        category: "Passing",
        question: "When passing a vehicle, ride through the driver’s blind spot:",
        options: ["As slowly as possible so they notice you", "As quickly as is safe and legal", "On the shoulder", "While looking only at your speedometer"],
        correct: 1,
        explanation: "Signal, check mirrors and your blind spot, pass at a legal speed, then signal and head-check before returning."
    },
    {
        category: "Lane splitting",
        question: "In California, lane splitting (riding between rows of vehicles in the same lane) is:",
        options: ["Illegal on every road", "Legal for a two-wheel motorcycle between stopped or moving vehicles", "Legal only for mopeds", "Legal only on the shoulder"],
        correct: 1,
        explanation: "Lane splitting is defined in California law for two-wheel motorcycles. It is not the same as riding on the shoulder, which is illegal."
    },
    {
        category: "Lane splitting",
        question: "Riding on the freeway shoulder:",
        options: ["Counts as legal lane splitting", "Is illegal and is not lane splitting", "Is required when traffic is over 65 mph", "Is safer than splitting between the #1 and #2 lanes"],
        correct: 1,
        explanation: "The shoulder is not a travel lane. Lane splitting means riding between lanes of vehicles, not off the roadway."
    },
    {
        category: "Lane splitting",
        question: "Lane splitting is generally more hazardous when:",
        options: ["Traffic is stopped and you move slowly", "Your speed and the speed difference with traffic are higher, or you split next to large trucks", "You stay between the far-left lanes at a small speed difference", "You wear bright gear"],
        correct: 1,
        explanation: "Risk rises with overall speed and speed differential. Avoid splitting beside big rigs and buses; the far-left lanes are typically the safer choice if you split at all."
    },
    {
        category: "SEE strategy",
        question: "SEE stands for:",
        options: ["Stop, Evade, Escape", "Search, Evaluate, Execute", "Signal, Enter, Exit", "Slow, Ease, Accelerate"],
        correct: 1,
        explanation: "Search ahead, beside, and behind; evaluate what the hazards might do; then execute a speed, position, or communication change."
    },
    {
        category: "SEE strategy",
        question: "Scan your path of travel at least:",
        options: ["1 to 2 seconds ahead", "10 to 15 seconds ahead", "One city block behind only", "As far as your high beam reaches at noon"],
        correct: 1,
        explanation: "Looking 10 to 15 seconds ahead gives you time to see hazards and plan an escape route."
    },
    {
        category: "SEE strategy",
        question: "In high-risk areas such as intersections and school zones, you should:",
        options: ["Speed up to clear the area", "Reduce speed and cover the clutch and both brakes", "Ride with both feet off the pegs", "Rely on eye contact with other drivers"],
        correct: 1,
        explanation: "Covering the controls cuts reaction time. Slow down so you can deal with hazards one at a time."
    },
    {
        category: "Intersections",
        question: "The greatest potential for a car-motorcycle crash is:",
        options: ["On empty rural straights", "At intersections, especially when a vehicle turns left in front of you", "While parked", "On a closed training range"],
        correct: 1,
        explanation: "More than half of car-motorcycle collisions involve another driver violating the rider’s right-of-way, often with a left turn."
    },
    {
        category: "Intersections",
        question: "If a driver looks at you at an intersection, you should:",
        options: ["Assume they will yield", "Still assume they may pull out; never count on eye contact", "Wave and take the right-of-way immediately", "Close your eyes and accelerate"],
        correct: 1,
        explanation: "Drivers often look at a motorcycle and still fail to see it. Have an escape plan and be ready to stop or swerve."
    },
    {
        category: "Intersections",
        question: "At a blind intersection with a stop sign, after you stop at the limit line you should:",
        options: ["Roll into the cross street until traffic honks", "Ease forward, stop again short of the cross lane, and look—keeping your front wheel out of the cross traffic", "Make a U-turn", "Sound the horn continuously"],
        correct: 1,
        explanation: "Stop first, then creep to a point where you can see without putting your front wheel into the crossing lane."
    },
    {
        category: "Hazards",
        question: "When passing a line of parked cars, ride in the:",
        options: ["Right portion of the lane next to the doors", "Left portion of your lane (or the center if oncoming traffic is close)", "Sidewalk", "Oncoming lane"],
        correct: 1,
        explanation: "The left path keeps you away from opening doors and people stepping out. Use the center if oncoming traffic crowds you."
    },
    {
        category: "Parking",
        question: "When parking at a curb, position the motorcycle:",
        options: ["Parallel, two feet from the curb", "At 45 to 90 degrees to the curb with a wheel or fender touching the curb", "In the bike lane facing traffic", "On the sidewalk"],
        correct: 1,
        explanation: "Angle parking with a wheel or fender on the curb keeps the motorcycle stable and out of the travel lane."
    },
    {
        category: "Visibility",
        question: "The best way to help others see your motorcycle is to:",
        options: ["Keep the headlight (and running lights, if equipped) on", "Ride without a helmet so they see your face", "Stay in other drivers’ blind spots", "Use only the taillight during the day"],
        correct: 0,
        explanation: "A motorcycle with its headlight on is much more likely to be noticed. California also requires the headlight on while riding."
    },
    {
        category: "Visibility",
        question: "Use your high beam:",
        options: ["Never during the day", "When it is legal and safe, including daytime; use low beam in fog", "Only in fog", "Whenever you follow another vehicle closely"],
        correct: 1,
        explanation: "High beam can help oncoming drivers see you by day or night. Dim for fog and when you would dazzle other drivers."
    },
    {
        category: "Signals",
        question: "On city streets, signal a turn during the last:",
        options: ["20 feet", "50 feet", "100 feet before the turn", "500 feet"],
        correct: 2,
        explanation: "Signal at least 100 feet before turning. On the highway, signal at least five seconds before a lane change."
    },
    {
        category: "Signals",
        question: "After you complete a turn, turn signals should be:",
        options: ["Left on so others keep watching you", "Canceled so other drivers do not think you will turn again", "Flashed with the brake light", "Replaced by the horn"],
        correct: 1,
        explanation: "A blinking signal after the turn can make a driver pull into your path. Cancel it."
    },
    {
        category: "Signals",
        question: "Flash your brake light before you slow when:",
        options: ["You are in an empty desert", "The slow-down may surprise others, such as for a tight off-ramp or when you are being tailgated", "You are increasing speed", "You are in first gear at a light"],
        correct: 1,
        explanation: "A motorcycle brake light is easy to miss. A flash warns drivers who may not expect you to slow."
    },
    {
        category: "Mirrors",
        question: "Convex (rounded) motorcycle mirrors:",
        options: ["Make vehicles look closer than they are", "Provide a wider view but make vehicles seem farther away", "Eliminate the need for a head check", "Are illegal in California"],
        correct: 1,
        explanation: "You see more of the road, but distance is distorted. Allow extra space and still turn your head before changing lanes."
    },
    {
        category: "Mirrors",
        question: "Before you change lanes you should:",
        options: ["Check mirrors only", "Check mirrors and turn your head to check the blind spot", "Honk and go", "Wave the next driver through"],
        correct: 1,
        explanation: "Motorcycles have blind spots. A head check is required in addition to mirrors."
    },
    {
        category: "Night riding",
        question: "At night you should:",
        options: ["Ride at the daytime speed limit and use a one-second following distance", "Slow down, use a three-second or greater following distance, and wear reflective gear", "Use only parking lights", "Stay in the right shoulder"],
        correct: 1,
        explanation: "Distances are harder to judge at night. Give yourself more time, use high beam when you can, and be reflective."
    },
    {
        category: "Collision avoidance",
        question: "If you swerve to avoid an obstacle, you should:",
        options: ["Brake hard while swerving", "Separate braking from swerving—brake before or after, not during the swerve", "Use only the front brake in the swerve", "Close your eyes and hold the bars loosely"],
        correct: 1,
        explanation: "Braking—especially the front brake—while swerving can make the motorcycle fall. Swerve, then brake, or brake, then swerve."
    },
    {
        category: "Collision avoidance",
        question: "To swerve left, you:",
        options: ["Press the left handlegrip, then press right to recover", "Pull the right grip toward you", "Apply the rear brake only", "Lean your body left and steer right"],
        correct: 0,
        explanation: "Press the grip on the side you want to go, keep your body more upright, and look at your escape path."
    },
    {
        category: "Surfaces",
        question: "If you must ride over an obstacle, you should:",
        options: ["Hit it with the front brake locked", "Slow, approach as close to 90 degrees as you can, rise slightly on the pegs, and add a little throttle just before contact", "Lean off the side of the motorcycle", "Close your eyes"],
        correct: 1,
        explanation: "A straight motorcycle, bent knees, and a light throttle blip help the front end up and let your legs absorb the hit. Then stop and check the tires."
    },
    {
        category: "Surfaces",
        question: "Pavement is often most slippery:",
        options: ["After several hours of heavy rain", "Just after rain begins, before oil washes aside", "On a hot dry afternoon", "Only on concrete"],
        correct: 1,
        explanation: "The first minutes of rain mix with oil in the lane. Slow down and use the tire tracks of cars when you can."
    },
    {
        category: "Surfaces",
        question: "On wet pavement, the center of the lane:",
        options: ["Is always the driest path", "Can be the most hazardous because oil collects there", "Should be used for both wheels", "Has the most traction"],
        correct: 1,
        explanation: "Ride in a vehicle’s tire track when it is wet. Squeeze both brakes gently—never grab."
    },
    {
        category: "Surfaces",
        question: "To cross tracks or pavement seams that run parallel to you:",
        options: ["Edge across them slowly at 0 degrees", "Move over and cross at an angle of at least 45 degrees", "Always turn 90 degrees into the next lane", "Stop on the rails"],
        correct: 1,
        explanation: "Crossing too shallow can catch a tire. Do not swerve into oncoming traffic just to get a 90-degree crossing."
    },
    {
        category: "Surfaces",
        question: "Rain grooves or bridge gratings that make the motorcycle wander are usually best handled by:",
        options: ["Zigzagging to stay in the lane", "Riding straight across at a steady speed and staying relaxed", "Grabbing the front brake", "Standing on the seat"],
        correct: 1,
        explanation: "The weave is usually not dangerous. Zigzagging to fight it is."
    },
    {
        category: "Mechanical problems",
        question: "If the front tire goes flat, steering will often feel:",
        options: ["Lighter than normal", "Heavy", "Unchanged", "Stuck in a right turn"],
        correct: 1,
        explanation: "A front flat makes steering feel heavy and is especially hazardous. Hold the grips, ease off the throttle, and stop using the good brake if you can tell which tire failed."
    },
    {
        category: "Mechanical problems",
        question: "If the rear tire goes flat, the motorcycle may:",
        options: ["Dive forward only", "Jerk or sway from side to side at the back", "Steer more quickly", "Gain power"],
        correct: 1,
        explanation: "A rear flat often makes the back end wander. Ease off the throttle, keep a straight course, and stop off the road."
    },
    {
        category: "Mechanical problems",
        question: "If the throttle sticks, you should:",
        options: ["Keep riding until the engine cools", "Twist the throttle back and forth; if it stays stuck, use the engine cut-off switch and pull in the clutch", "Downshift to first and accelerate", "Apply only the front brake"],
        correct: 1,
        explanation: "The cut-off switch and clutch take power from the rear wheel so you can get off the road and stop."
    },
    {
        category: "Mechanical problems",
        question: "If the front end develops a wobble, you should:",
        options: ["Accelerate hard to stabilize it", "Grip the bars firmly, roll off the throttle gradually, and not apply the brakes", "Grab the front brake", "Stand up on the pegs and fight the bars"],
        correct: 1,
        explanation: "Accelerating or braking can make a wobble worse. Slow gradually, get off the road, and fix the load, tires, or steering problem."
    },
    {
        category: "Mechanical problems",
        question: "Engine seizure is often caused by:",
        options: ["Too much chain lube", "Low oil, so the engine overheats and locks", "A stuck sidestand", "A burned-out headlight"],
        correct: 1,
        explanation: "Squeeze the clutch to disconnect the rear wheel, pull off the road, and check the oil. Let the engine cool before restarting."
    },
    {
        category: "Animals",
        question: "If an animal darts out and you are in traffic, you should:",
        options: ["Swerve into the next lane regardless of cars", "Do everything you safely can to avoid the animal, but stay in your lane if leaving it would cause a worse crash", "Speed up and hit it squarely", "Close your eyes"],
        correct: 1,
        explanation: "Hitting an animal is bad; hitting a car is usually worse. Stay in your lane when traffic does not give you an out."
    },
    {
        category: "Passengers",
        question: "A passenger should get on the motorcycle:",
        options: ["Before you start the engine", "Only after you start the engine and the motorcycle is stable", "By jumping on from the left while you roll", "Without using the footrests"],
        correct: 1,
        explanation: "Start the engine first, then have the passenger mount. They need a proper seat and footrests."
    },
    {
        category: "Passengers",
        question: "Instruct a passenger to:",
        options: ["Lean the opposite way of the rider in turns", "Sit far forward without crowding you, keep both feet on the pegs, and lean with you", "Talk and point at sights constantly", "Hold the rider’s helmet"],
        correct: 1,
        explanation: "The passenger should hold your waist or hips, keep feet on the pegs even when stopped, and look over your shoulder through turns."
    },
    {
        category: "Passengers",
        question: "With a passenger, you should:",
        options: ["Ride at the same speeds as when solo", "Ride a little slower, start slowing earlier, and keep a larger space cushion", "Use only the rear brake", "Skip signaling so you can keep both hands on the bars"],
        correct: 1,
        explanation: "Extra weight means slower acceleration and longer stopping distances. Recheck tire pressure, suspension, mirrors, and headlight aim."
    },
    {
        category: "Passengers",
        question: "Child passengers must be able to:",
        options: ["Stand on the seat", "Reach the passenger footrests, and must wear a properly fitted full-face DOT helmet", "Ride without a helmet if under 50 pounds", "Hold the turn-signal switch"],
        correct: 1,
        explanation: "If a child’s feet cannot reach the pegs, they should not ride as a passenger. Gear standards are the same as for adults—plus a snug full-face helmet."
    },
    {
        category: "Loads",
        question: "Cargo should be carried:",
        options: ["Stacked high on a sissy bar behind the rear axle", "Low, over or in front of the rear axle, and evenly side to side", "Hanging from the handlegrips", "On the front fender only"],
        correct: 1,
        explanation: "A high or rearward load raises the center of gravity and can cause a wobble. Secure it so it cannot shift into the wheel or chain."
    },
    {
        category: "Group riding",
        question: "The recommended group riding formation on a straight road is:",
        options: ["Side by side in pairs", "A staggered formation", "Single file with no gaps", "One rider on the shoulder"],
        correct: 1,
        explanation: "Staggered formation keeps the group compact and still gives each rider a space cushion. Never ride directly beside another motorcycle while moving."
    },
    {
        category: "Group riding",
        question: "In a staggered group, the lead rider stays in the left portion of the lane. The second rider should be:",
        options: ["Even with the leader on the right", "About one second back in the right portion of the lane", "Three cars back in the left portion", "On the centerline"],
        correct: 1,
        explanation: "Rider three is two seconds behind the leader on the left; rider four is two seconds behind the second rider. Pass one at a time."
    },
    {
        category: "Group riding",
        question: "If a group is larger than four or five riders, you should:",
        options: ["Ride two abreast to shorten the group", "Split into two or more smaller groups", "Ignore traffic lights so you stay together", "Put beginners at the very back with no leader"],
        correct: 1,
        explanation: "Small groups are easier for other traffic to pass and less likely to get split up. Put inexperienced riders right behind the leader."
    },
    {
        category: "Group riding",
        question: "When a group reaches a stop sign or red light:",
        options: ["The whole group may treat it as one vehicle and roll through", "Each rider must obey the signal or sign", "Only the last rider must stop", "Motorcycles may proceed on yellow only"],
        correct: 1,
        explanation: "Every vehicle must obey traffic controls. Plan stops so the group can regroup safely after the intersection."
    },
    {
        category: "Alcohol",
        question: "Alcohol on a motorcycle:",
        options: ["Affects riders less than car drivers because of the wind", "Impairs judgment and coordination; motorcycle riding demands more skill, so any alcohol is especially dangerous", "Is legal if you stay in the HOV lane", "Only matters above a BAC of 0.10%"],
        correct: 1,
        explanation: "The same DUI laws apply, and riding requires precise balance and decisions. Do not drink and ride."
    },
    {
        category: "Fatigue",
        question: "If you become tired while riding, you should:",
        options: ["Ride faster to finish sooner", "Get off the road, rest, and do not keep riding impaired by fatigue", "Drink coffee and lane-split to stay alert", "Follow a truck closely so you can draft"],
        correct: 1,
        explanation: "Fatigue slows your search and reactions. Stop in a safe place rather than pushing on."
    },
    {
        category: "Merging",
        question: "When a vehicle is merging from an on-ramp, you should:",
        options: ["Stay in their blind spot so they yield", "Change lanes if you can, or adjust speed and stay near the center of your lane to give them room", "Speed up and cut them off", "Ride on the rumble strip"],
        correct: 1,
        explanation: "Drivers often miss motorcycles. Do not sit in a blind spot; make space for the merge."
    },
    {
        category: "Equipment",
        question: "A motorized scooter may be used:",
        options: ["As the vehicle for a DMV motorcycle skills test", "With any class of driver’s license, but not for a motorcycle skills test", "Only with an M1 license", "On freeways at night without a headlight"],
        correct: 1,
        explanation: "Any class of license can operate a motorized scooter. DMV will not use a scooter for the motorcycle skills test."
    }
];
