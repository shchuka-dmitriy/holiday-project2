import './styles.scss';

const worksContainer = document.getElementById('works');
const workContainerId = document.getElementById('workContainerId');
worksContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.className === 'workItem' || e.target.parentNode.className === 'workDescription') {
    workContainerId.classList.add('openWorkImg');
    let workElem;
    if (e.target.className === 'workDescription') {
      workElem = e.target.parentNode;
    } else {
      workElem = e.target.parentNode.parentNode;
    }
	const openedWorkImg = workContainerId.childNodes[1].childNodes[3];
    const workImg = workElem.childNodes[3];
    openedWorkImg.src = workImg.src;
  }
});

const closeWorkImgBtn = document.getElementById('closeWorkImgId');
closeWorkImgBtn.onclick = function() {
  workContainerId.classList.remove('openWorkImg');
};
