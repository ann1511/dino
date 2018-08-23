// this.setState ( prevState => {
//     if (prevState.clickOnDino){
//         if (prevState.count < 15) {
//             return {
//                 dinoURL: constants.DINO_DIE,
//                 count: prevState.count + 1,
//             }
//         }
//         else {
//             clearInterval(this.timer);
//             return {
//                 dinoURL: constants.DINO_DIE,
//             }
//         }
//     }
//     else{
//         if (!prevState.clickOnDino){
//             if (prevState.count < 1) {
//                 return {
//                     dinoURL: constants.DINO_DIE,
//                     count: prevState.count + 1,
//                 }
//             }
//             else {
//                 clearInterval(this.timer);
//                 return {
//                     dinoURL: constants.DINO_DIE,
//                 }
//             }
//         }
//     }
// });