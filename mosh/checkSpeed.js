const speed = 77


// speed limit = 70
// 1 point -> 5 over
// if 12 points -> suspended

const checkSpeed = (speed) => {
const speedLimit = 70
const mphPerPoint = 5
let points = 0

    if ( speed > speedLimit) {
        let calulateSpeedOver = speed - speedLimit
        let calulatePoints =  calulateSpeedOver / mphPerPoint
        points = Math.floor(calulatePoints)

            if(points >= 12) {
                return "SUSPENDED"

    }else return points
        } return 'OK'
}

console.log(`[check speed] ${checkSpeed(speed)}`)