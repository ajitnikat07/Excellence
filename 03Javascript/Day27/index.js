//baed On Month
const zodiacSigns = [
        'Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini',
        'Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'
];

//Based On Date size 40
const compliments = [
  "You have a magnetic personality",
  "Your smile brings positive energy",
  "You are naturally intelligent",
  "People feel comfortable around you",
  "You have strong intuition",
  "Your confidence inspires others",
  "You are emotionally mature",
  "You have a kind heart",
  "You are very creative",
  "Your thinking is unique",

  "You are destined for success",
  "You have leadership qualities",
  "Your patience is admirable",
  "You handle challenges gracefully",
  "You attract good luck",
  "Your hard work will pay off",
  "You are mentally strong",
  "You have a calming presence",
  "Your communication skills are excellent",
  "You are a fast learner",

  "You bring happiness to people",
  "You are honest and trustworthy",
  "Your dedication is impressive",
  "You have a bright future",
  "You are full of positive vibes",
  "You make wise decisions",
  "You are adaptable to change",
  "Your energy is powerful",
  "You are spiritually inclined",
  "You have inner strength",

  "You are meant to do great things",
  "You are loved by the universe",
  "Your aura attracts success",
  "You are brave and fearless",
  "You have a pure soul",
  "You radiate confidence",
  "You are highly motivated",
  "You are balanced and focused",
  "You bring harmony wherever you go",
  "You are truly special"
];

//size 20
const victimCompliments = [
  "You always do good for others, even when they don’t return the same",
  "You give your best to people, but often get misunderstood",
  "You care deeply, even when others take you for granted",
  "You help everyone, yet rarely ask for help yourself",
  "Your intentions are pure, but people fail to see your value",
  "You sacrifice your comfort to keep others happy",
  "You stay loyal even when loyalty is not returned",
  "You forgive easily, even when you are hurt deeply",
  "You put others first, even when it costs you emotionally",
  "You spread kindness, but often receive silence in return",

  "You stay honest even in a dishonest world",
  "You support people during their worst times, but stand alone in yours",
  "You give chances to people who don’t always deserve them",
  "You stay strong for others while hiding your own pain",
  "You listen to everyone, but few truly listen to you",
  "You love genuinely, even when love is not valued",
  "You keep trusting, even after being disappointed",
  "You heal others while carrying your own wounds",
  "You stay patient while waiting for fairness",
  "You do good silently, even when no one notices"
];

//size 30
const lifeRecommendations = [
  "Feed a street dog or help an animal in need",
  "Start your day with gratitude for what you have",
  "Help someone without expecting anything in return",
  "Spend time with your parents and elders",
  "Exercise or walk at least 20 minutes daily",
  "Read books that improve your mindset",
  "Avoid comparing your journey with others",
  "Save a small part of your income regularly",
  "Learn to say no to things that drain your energy",
  "Practice meditation or deep breathing",
  "Be honest even when it is difficult",
  "Respect everyone regardless of their status",
  "Reduce screen time and live in the moment",
  "Drink enough water and take care of your health",
  "Learn a new skill every year",
  "Forgive people to free your own mind",
  "Volunteer for social or community work",
  "Eat healthy and avoid junk food regularly",
  "Control anger and respond calmly",
  "Spend time in nature whenever possible",
  "Support local and small businesses",
  "Keep your promises, even small ones",
  "Sleep well and maintain a routine",
  "Be kind to yourself on bad days",
  "Listen more and speak less",
  "Donate clothes or food to the needy",
  "Focus on progress, not perfection",
  "Stay curious and keep learning",
  "Express love to people you care about",
  "Live simply and value experiences over things"
];

//size 20 
const futurePredictions = [
  "Your hard work will soon turn into massive financial success",
  "You are destined to become a crorepati through smart decisions",
  "A powerful opportunity will change your financial future",
  "Money will flow to you from multiple sources",
  "Your patience and consistency will make you very wealthy",
  "A business idea will bring you long-term riches",
  "Your financial struggles are temporary, success is permanent",
  "You will attract wealth through focus and discipline",
  "A major breakthrough in your career is coming",
  "Your skills will make you financially independent",
  "Luck will support you in important money matters",
  "You will create assets that generate passive income",
  "Your dedication will lead you to a luxurious lifestyle",
  "A mentor or connection will help you grow rich",
  "You will achieve financial freedom earlier than expected",
  "Your mindset will transform you into a crorepati",
  "A smart investment will multiply your wealth",
  "Your future holds stability, abundance, and success",
  "You will overcome financial obstacles with confidence",
  "Wealth, respect, and success are written in your destiny"
];

//adding event listener for form
const form = document.getElementById("astroForm");
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  console.log("Submitted");


  const name=document.getElementById("firstName").value;
  const surname=document.getElementById("lastName").value;

  
  const day=Number(document.getElementById("day").value);
  const month=Number(document.getElementById("month").value);
  const year=Number(document.getElementById("year").value);

  const result = document.getElementById("result");
  
  const first_message =`Hello ${name} ${surname}`
  const second_message=`Your Zodiac Sign is ${zodiacSigns[month-1]}`
  const third_message=compliments[day-1];

  let index=Math.floor(Math.random()*20);
  const fourth_message=victimCompliments[index];

  //recommendation
  index=(name.length * surname.length * year)%30; 
  const fifth_message=lifeRecommendations[index];

  //predictions
  index = (day*month*year)%20
  const sixth_message= futurePredictions[index];

  result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} ${fifth_message} ${sixth_message}`
  result.style.display = "block";
})
