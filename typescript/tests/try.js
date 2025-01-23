var CourseType;
(function (CourseType) {
    CourseType[CourseType["FREE"] = 10] = "FREE";
    CourseType[CourseType["PREMIUM"] = 11] = "PREMIUM";
    CourseType[CourseType["PRIVATE"] = 12] = "PRIVATE";
    CourseType[CourseType["HIDDEN"] = 13] = "HIDDEN";
})(CourseType || (CourseType = {}));
// const course = {
//     title: "TypeScript",
//     type: CourseType.FREE
// }
console.log(CourseType.FREE);
