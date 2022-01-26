let dragged;

/* events fired on the draggable target */
document.addEventListener('drag', function (event) {}, false);

document.addEventListener(
  'dragstart',
  function (event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;

    //setTimeout(() => (event.target.style.display = 'none'), 0); //I WROTE THIS so that once we pick to give actual remove effect
  },
  false
);

document.addEventListener(
  'dragend',
  function (event) {
    // reset the transparency
    event.target.style.opacity = '';
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  'dragover',
  function (event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  'dragenter',
  function (event) {
    // highlight potential drop target when the draggable element enters it
    //Changing color of middlebody on enter of shirt
    if (event.target.className == 'middlebody') {
      event.target.style.background = dragged.className.split(' ')[1];
    }

    if (event.target.className == 'lowerbody') {
      event.target.style.background = dragged.className.split(' ')[1];
    }
  },
  false
);

document.addEventListener(
  'dragleave',
  function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == 'middlebody') {
      event.target.style.background = '';
    }

    if (event.target.className == 'lowerbody') {
      event.target.style.background = '';
    }
  },
  false
);

/* ON DROP EVENT */

// const ondropfunction = (event, display, background, width) => {
//   dragged.style.display = 'block'; //I WROTE THIS
//   event.target.style.background = '';
//   dragged.style.width = '100px'; //Setting size of shirt dragged same as that of body size
//   dragged.parentNode.removeChild(dragged);
//   event.target.appendChild(dragged);
// };

document.addEventListener(
  'drop',
  function (event) {
    event.preventDefault();

    /* BODY ACTIONS*/
    // move dragged elem to the selected drop target
    if (event.target.className == 'middlebody') {
      dragged.style.display = 'block'; //I WROTE THIS
      //   console.log(dragged.className);
      event.target.style.background = '';
      dragged.style.width = '100px'; //Setting size of shirt dragged same as that of body size
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }

    if (event.target.className == 'lowerbody') {
      dragged.style.display = 'block'; //I WROTE THIS
      //   console.log(dragged.className);
      event.target.style.background = '';
      dragged.style.width = '100px'; //Setting size of shirt dragged same as that of body size
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }

    /* BACK to ORIGINAL STORE*/
    if (event.target.className == 'shirts') {
      dragged.style.display = 'block'; //I WROTE THIS
      dragged.style.width = '66px'; //resetting size of shirt back to original size of shirts
      event.target.style.background = '';
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }

    if (event.target.className == 'pants') {
      dragged.style.display = 'block'; //I WROTE THIS
      dragged.style.width = '66px'; //resetting size of shirt back to original size of shirts
      event.target.style.background = '';
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }

    /*IF USER DRAGS SHORT ITEM ON ALREADY EXISITING STORE ITEM*/

    //If user is dragged shirt on shirt, then move old shirt back to store and push new shirt in
    // let checkClassName = dragged.className.split('').splice(0, 5).join('');
    if (
      event.target.className.includes(
        dragged.className.split('').splice(0, 5).join('')
      )
    ) {
      event.target.style.background = '';
      dragged.style.display = 'block'; //I WROTE THIS
      dragged.style.width = '100px'; //resetting size of shirt back to original size of shirts

      //get id of old shirt
      let oldShirtById = document.getElementById(
        event.target.className.split('').splice(0, 6).join('')
      );
      let shirts = document.getElementById('shirts');
      //Shirt back old shirt to its original size
      oldShirtById.style.width = '66px';
      //attach old shirt to shirts
      shirts.appendChild(oldShirtById);
      //perform other action as usual for new shirt by detaching it from shirts
      dragged.parentNode.removeChild(dragged);
      //get id of body part
      let middlebody = document.getElementById('middlebody');
      //attach new shirt to body part
      middlebody.appendChild(dragged);
    }
  },
  false
);
