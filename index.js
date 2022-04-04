const Daily = document.getElementById('Daily');
const Weekly = document.getElementById('Weekly');
const Monthly = document.getElementById('Monthly');
// console.log(Daily);



const url = '/data.json'

fetch(url).then(res => res.json()).then(data => viewDates(data))
const StateWork = document.querySelector(`.stateWork`)
const PrevWork = document.querySelector('.PrevWork')

const StatePlay = document.querySelector('.statePlay')
const PrevPlay = document.querySelector('.PrevPlay')

const stateStudy = document.querySelector('.stateStudy')
const PrevStudy = document.querySelector('.PrevStudy')

const stateExercise = document.querySelector('.stateExercise')
const PrevExercise = document.querySelector('.PrevExercise')

const stateSocial = document.querySelector('.stateSocial')
const PrevSocial = document.querySelector('.PrevSocial')

const stateSelfCare = document.querySelector('.stateSelfCare')
const PrevSelfCare = document.querySelector('.PrevSelfCare')

const viewDates = (data) => {
  data.map(dato => {
    switch (dato.title) {
      case "Work":
      StateWork.innerHTML = `${dato.timeframes.daily.current}hrs`
      PrevWork.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
      break;
      case "Play":
      StatePlay.innerHTML = `${dato.timeframes.daily.current}hrs`
      PrevPlay.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
      break;
      case "Study":
      stateStudy.innerHTML = `${dato.timeframes.daily.current}hrs`
      PrevStudy.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
      break;
      case "Exercise":
      stateExercise.innerHTML = `${dato.timeframes.daily.current}hrs`
      PrevExercise.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
      case "Social":
        stateSocial.innerHTML = `${dato.timeframes.daily.current}hrs`
        PrevSocial.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
        break;
      case "Self Care":
        stateSelfCare.innerHTML = `${dato.timeframes.daily.current}hrs`
        PrevSelfCare.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
        break
        default:

        break;
    }
  });
  Daily.addEventListener('click', e => {
    data.map(dato => {
      switch (dato.title) {
        case "Work":
        StateWork.innerHTML = `${dato.timeframes.daily.current}hrs`
        PrevWork.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
        break;
        case "Play":
        StatePlay.innerHTML = `${dato.timeframes.daily.current}hrs`
        PrevPlay.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
        break;
        case "Study":
        stateStudy.innerHTML = `${dato.timeframes.daily.current}hrs`
        PrevStudy.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
        break;
        case "Exercise":
        stateExercise.innerHTML = `${dato.timeframes.daily.current}hrs`
        PrevExercise.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
        case "Social":
          stateSocial.innerHTML = `${dato.timeframes.daily.current}hrs`
          PrevSocial.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
          break;
        case "Self Care":
          stateSelfCare.innerHTML = `${dato.timeframes.daily.current}hrs`
          PrevSelfCare.innerHTML = `Last Week - ${dato.timeframes.daily.previous}hrs`
          break
          default:

          break;
      }
    });
        });
        Weekly.addEventListener('click', e => {
          data.map(dato => {
            switch (dato.title) {
              case "Work":
              StateWork.innerHTML = `${dato.timeframes.weekly.current}hrs`
              PrevWork.innerHTML = `Last Week - ${dato.timeframes.weekly.previous}hrs`
                break;
              case "Play":
              StatePlay.innerHTML = `${dato.timeframes.weekly.current}hrs`
              PrevPlay.innerHTML = `Last Week - ${dato.timeframes.weekly.previous}hrs`
              break;
              case "Study":
              stateStudy.innerHTML = `${dato.timeframes.weekly.current}hrs`
              PrevStudy.innerHTML = `Last Week - ${dato.timeframes.weekly.previous}hrs`
              break;
              case "Exercise":
              stateExercise.innerHTML = `${dato.timeframes.weekly.current}hrs`
              PrevExercise.innerHTML = `Last Week - ${dato.timeframes.weekly.previous}hrs`
              break;
              case "Social":
                stateSocial.innerHTML = `${dato.timeframes.weekly.current}hrs`
               PrevSocial.innerHTML = `Last Week - ${dato.timeframes.weekly.previous}hrs`
                break;
              case "Self Care":
                stateSelfCare.innerHTML = `${dato.timeframes.weekly.current}hrs`
                PrevSelfCare.innerHTML = `Last Week - ${dato.timeframes.weekly.previous}hrs`
                break
                default:
      
                break;
            }
          });
              }); 
              Monthly.addEventListener('click', e => {
                data.map(dato => {
                  switch (dato.title) {
                    case "Work":
                    StateWork.innerHTML = `${dato.timeframes.monthly.current}hrs`
                    PrevWork.innerHTML = `Last Week - ${dato.timeframes.monthly.previous}hrs`
                      break;
                    case "Play":
                    StatePlay.innerHTML = `${dato.timeframes.monthly.current}hrs`
                    PrevPlay.innerHTML = `Last Week - ${dato.timeframes.monthly.previous}hrs`
                    break;
                    case "Study":
                    stateStudy.innerHTML = `${dato.timeframes.monthly.current}hrs`
                    PrevStudy.innerHTML = `Last Week - ${dato.timeframes.monthly.previous}hrs`
                    break;
                    case "Exercise":
                    stateExercise.innerHTML = `${dato.timeframes.monthly.current}hrs`
                    PrevExercise.innerHTML = `Last Week - ${dato.timeframes.monthly.previous}hrs`
                    break;
                    case "Social":
                      stateSocial.innerHTML = `${dato.timeframes.monthly.current}hrs`
                     PrevSocial.innerHTML = `Last Week - ${dato.timeframes.monthly.previous}hrs`
                      break;
                    case "Self Care":
                      stateSelfCare.innerHTML = `${dato.timeframes.monthly.current}hrs`
                      PrevSelfCare.innerHTML = `Last Week - ${dato.timeframes.monthly.previous}hrs`
                      break
                      default:
            
                      break;
                  }
                });
                    }); 
    
}