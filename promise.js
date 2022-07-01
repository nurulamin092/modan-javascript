/* const promise = new Promise((resolve, reject) => {

}); */

const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meeting',
            time: '10:00 PM'
        };
        resolve(meetingDetails);
    } else {
        reject(new Error('Meeting already scheduled!'));
    }
});

// const addToCalender = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} has been scheduled on
//          ${meetingDetails.location} and ${meetingDetails.time}`;
//         resolve(calendar)
//     })
// }

const addToCalender = (meetingDetails) => {

    const calendar = `${meetingDetails.name} has been scheduled on
         ${meetingDetails.location} and ${meetingDetails.time}`;
    return promise.resolve(calendar)
}
meeting
    .then(addToCalender)
    .then((res) => {
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err.message);
    })