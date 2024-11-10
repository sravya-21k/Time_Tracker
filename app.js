document.addEventListener("DOMContentLoaded", () => {
  const activities = [
    {
      title: "Work",
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 },
    },
    {
      title: "Play",
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 },
    },
    {
      title: "Study",
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 },
    },
    {
      title: "Exercise",
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 },
    },
    {
      title: "Social",
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 },
    },
    {
      title: "Self Care",
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 },
    },
  ];
  //Get references to the timeFrame buttons
  const dailyBtn = document.getElementById("daily-btn");
  const weeklyBtn = document.getElementById("weekly-btn");
  const monthlyBtn = document.getElementById("monthly-btn");

  //Function to update activity data based on the selected timeframe
  const updateTimeFrames = (timeFrame) => {
    //Get all activity sections
    const activityElements = document.querySelectorAll(".section");

    //Determine the label for the previous period based on the timeFrame
    const title =
      timeFrame === "daily"
        ? "Yesterday" //If timeFrame is "daily" assign "Yesterday"
        : timeFrame === "weekly"
        ? "Last Week" //If timeFrame is "weekly" assign "Last week"
        : "Last Month"; //If neither "daily" nor "weekly", assign "Last month"

    //Loop through each activity element and update its content
    activityElements.forEach((element, index) => {
      const { current, previous } = activities[index][timeFrame]; //Get current and previous hours
      element.querySelector("h2").textContent = `${current}hrs`; //update current hours
      element.querySelector("p").textContent = `${title} - ${previous}hrs`; //update previous period
    });
  };
  dailyBtn.addEventListener("click", () => updateTimeFrames("daily")); //update data for daily timeFrame
  weeklyBtn.addEventListener("click", () => updateTimeFrames("weekly")); //update data for weekly timeFrame
  monthlyBtn.addEventListener("click", () => updateTimeFrames("monthly")); //Update data for monthly timeFrame
});
