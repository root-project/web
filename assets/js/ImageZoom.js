const LENS_BORDER_SIZE = 1; // The border size of the lens that move with the cursor
const ZOOM_BORDER_SIZE = 2; // The border size of the resulted zoom area
const DIV = {}; // The main div, initialized at first !
const IS_ZOOM = {}; // If the zoom is enabled for the picture;
const ZOOM_SPEED = 10; // Number of pixels added each mouse scroll

/**
 * Main function of the script
 * This take two parameters, one is the SRC of the picture, it can be an directory or a Base64 code or whatever the <img> can take
 *
 * @param src -- normal <img> src
 * @param divid -- The ID where to dray the picture
 */
function drawImage(src, divid) {
   DIV[divid] = document.getElementById(divid);
   DIV[divid].style.display = 'inline-block';
   DIV[divid].style.position = 'relative';
   IS_ZOOM[divid] = false;
   const image = document.createElement("img");
   image.id = divid + 'Image';
   image.src = src;
   image.style.maxWidth = '100%';
   image.style.maxHeight = '100%';
   document.getElementById(divid).appendChild(image);
   createZoom(divid);
   createLens(divid);

   window.addEventListener('load', function() {
      initialize(divid);
      createControls(divid);
   });
}

/**
 * This function will create the lens that move with the cursor
 *
 * @param masterID -- The ID of the main element
 * @returns {HTMLDivElement} -- Return the lens if needed
 */
function createLens(masterID) {
   const lens = document.createElement('div');
   lens.id = masterID + 'Lens';
   const style = lens.style;

   style.position = 'absolute';
   style.border = `${LENS_BORDER_SIZE}px solid rgb(0, 126, 255)`;
   style.backgroundColor = 'rgba(0, 126, 255, .2)';
   style.display = 'none';
   style.cursor = 'move';
   style.zIndex = '10';

   DIV[masterID].appendChild(lens);
   setDragDropAble(masterID, lens);
   resizeableElement(masterID, lens);

   return lens;
}

/**
 * This function will create the zoomed area
 *
 * @param masterID -- The ID of the main element
 * @returns {HTMLDivElement} -- Return the zoomed area if needed
 */
function createZoom(masterID) {
   const zoom = document.createElement('div');
   zoom.id = masterID + 'Zoom';

   const style = zoom.style;

   style.border = `${ZOOM_BORDER_SIZE}px solid black`;
   style.display = 'inline-block';
   style.backgroundRepeat = 'no-repeat';
   style.position = 'absolute';
   style.background = 'white';
   style.cursor = 'move';
   style.display = 'none';
   style.zIndex = '9';

   DIV[masterID].appendChild(zoom);
   setDragDropAble(masterID, zoom);
   resizeableElement(masterID, zoom);

   return zoom;
}

/**
 * This function create the controls for the script.
 * For now only the zoom is created, but this is here if you wan to add others option like rotate controls
 * There is no return because the controls are not only one
 *
 * @param masterID -- The ID of the main element
 */
function createControls(masterID) {
   const controls = document.createElement('div');
   controls.style.textAlign = 'initial';
   controls.id = masterID + 'Controls';

   //Append the child into the master DIV
   DIV[masterID].appendChild(controls);
   const lensButton = createLensButton();
   //Append the SVG button into controls
   controls.appendChild(lensButton);

   // Listener to enable/disable the zoom
   lensButton.addEventListener('click', toggleZoom);

   function createLensButton() {
      const zoomSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      zoomSVG.setAttributeNS(null, 'viewBox', '0 0 15.99 16');
      zoomSVG.style.marginTop = 10 + 'px';
      zoomSVG.style.objectFit ='contain';
      zoomSVG.style.width = '16px';
      zoomSVG.style.cursor = 'pointer';
      zoomSVG.style.height = '16px';
      zoomSVG.style.opacity = '0.3';
      zoomSVG.style.fill = 'steelblue';
      zoomSVG.id = masterID + 'ZoomButton';
      controls.appendChild(zoomSVG);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttributeNS(null, 'd','M15.5,13.12L13.19,10.8a1.69,1.69,0,0,0-1.28-.55l-0.06-.06A6.5,6.5,0,0,0,5.77,0,6.5,6.5,0,0,0,2.46,11.59a6.47,6.47,0,0,0,7.74.26l0.05,0.05a1.65,1.65,0,0,0,.5,1.24l2.38,2.38A1.68,1.68,0,0,0,15.5,13.12ZM6.4,2A4.41,4.41,0,1,1,2,6.4,4.43,4.43,0,0,1,6.4,2Z');
      path.setAttributeNS(null, 'transforrm','translate(-.01)');
      path.setAttributeNS(null, 'x','0');
      path.setAttributeNS(null, 'y','0');
      path.setAttributeNS(null, 'height','14');
      path.setAttributeNS(null, 'width','14');
      zoomSVG.appendChild(path);

      return zoomSVG;
   }

   function toggleZoom() {
      IS_ZOOM[masterID] = !IS_ZOOM[masterID];

      if(IS_ZOOM[masterID]) {
         document.getElementById(masterID+ 'Zoom').style.display = 'inline-block';
         document.getElementById(masterID+ 'Lens').style.display = 'initial';

         lensButton.style.opacity = '1';
         update(masterID);
      } else {
         document.getElementById(masterID+ 'Zoom').style.display = 'none';
         document.getElementById(masterID+ 'Lens').style.display = 'none';

         lensButton.style.opacity = '0.3';
      }
   }
}

/**
 * This function initialise the elements so they can work
 *
 * @param masterID -- The ID of the main element
 */
function initialize(masterID) {
   const img = document.getElementById(masterID + 'Image');
   let imgPosition = img.getBoundingClientRect();
   img.style.height = Math.round(imgPosition.height) + 'px';
   img.style.width = Math.round(imgPosition.width) + 'px';
   imgPosition = img.getBoundingClientRect();

   initLens();
   initZoom();

   // Start position and size of the zoom
   function initZoom() {
      const zoom = document.getElementById(masterID + 'Zoom');

      zoom.style.backgroundImage = "url('" + img.src + "')";
      // Move the zoom area to the upper left, initially 3x larger than the lense.
      zoom.style.left = 0 + 'px';
      zoom.style.top = 0 + 'px';
      zoom.style.height = Math.round(imgPosition.height/3) + 'px';
      zoom.style.width = Math.round(imgPosition.width/3) + 'px';
      zoom.title = "Zoom area: focus and scroll to resize";
   }

   // Start position and size of the lens
   function initLens() {
      const lens = document.getElementById(masterID + 'Lens');

      // Center the lense area.
      lens.style.left = Math.round((9*imgPosition.width)/20) + 'px';
      lens.style.top = Math.round((9*imgPosition.height/20)) + 'px';
      lens.style.height = Math.round(imgPosition.height/10) + 'px';
      lens.style.width = Math.round(imgPosition.width/10) + 'px';
      lens.title = "Lens area: focus and scroll to resize";
   }
}

/**
 * Collection of cuntions to make element drag & drop able
 *
 * @param masterID -- The ID of the main element
 * @param elem -- The element to drag & drop
 */
function setDragDropAble(masterID, elem) {
   let movePosX = 0;
   let movePosY = 0;
   let clickPosX = 0;
   let clickPosY = 0;

   elem.addEventListener('mousedown', startDrag);

   // Function that is call when dragging
   function startDrag(e) {
      e.preventDefault();

      //Set the start click position
      clickPosX = e.clientX;
      clickPosY = e.clientY;

      // Attach the drag events
      document.onmouseup = endDrag;
      document.onmousemove = drag;
   }

   // Function during the drag
   function drag(e) {
      e.preventDefault();

      // Change cursor position to the new one
      movePosX = clickPosX - e.clientX;
      movePosY = clickPosY - e.clientY;

      // Reset the click position for next event
      clickPosX = e.clientX;
      clickPosY = e.clientY;

      elem.style.top = (elem.offsetTop - movePosY) + "px";
      elem.style.left = (elem.offsetLeft - movePosX) + "px";

      update(masterID);
   }

   // Function that start when dropped
   function endDrag() {

      //Remove the events bindings
      document.onmouseup = null;
      document.onmousemove = null;
   }
}

/**
 * Main function of the element resizing
 *
 * @param masterID -- The ID of the main element
 * @param elem -- The element to resize
 */
function resizeableElement(masterID, elem) {
   elem.addEventListener('wheel', zoom);

   /**
    * Function that allow you the change the size  an element
    *
    * @param e -- The scroll wheel event
    */
   function zoom(e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      const imgPos = document.getElementById(masterID+ 'Image').getBoundingClientRect();
      const height = Number(elem.style.height.slice(0, -2));
      const width = Number(elem.style.width.slice(0, -2));

      let resultWidth;
      let resultHeight;

      let coef;
      if(e.deltaY > 0) {
         coef = (width - ZOOM_SPEED)/width;
      } else {
         coef = (width + ZOOM_SPEED)/width;
      }

      resultHeight = height * coef;
      resultWidth = width * coef;

      // Width too small
      if(imgPos.width/10 > resultWidth) {
         resultWidth = imgPos.width/10;
      }

      // Height too small
      if(imgPos.height/10 > resultHeight) {
         resultHeight = imgPos.height/10
      }

      if(elem.id.endsWith('Lens')) {

         // Height too big
         if(resultHeight > imgPos.height) {
            resultHeight = imgPos.height;
         }

         // Width too big
         if(resultWidth > imgPos.width) {
            resultWidth = imgPos.width;
         }
      }
      else {
         // Height too big
         if(resultHeight > window.innerHeight) {
            resultHeight = window.innerHeight;
            resultWidth = window.innerHeight * (imgPos.width/imgPos.height);
         }

         // Width too big
         if(resultWidth > window.innerWidth) {
            resultWidth = window.innerWidth;
            resultHeight = window.innerWidth * (imgPos.height/imgPos.width);
         }
      }

      elem.style.height = resultHeight + 'px';
      elem.style.width = resultWidth + 'px';

      update(masterID);
   }
}

/**
 * This function update he positions of the elements and the zoom
 *
 * @param masterID -- The ID of the main element
 */
function update(masterID) {
   const zoom = document.getElementById(masterID + 'Zoom');
   const img = document.getElementById(masterID + 'Image');
   const lens = document.getElementById(masterID + 'Lens');
   const imagePosition = img.getBoundingClientRect();
   lens.style.zIndex = '8';

   let cx = (zoom.offsetWidth - (ZOOM_BORDER_SIZE * 2)) / (lens.offsetWidth - (LENS_BORDER_SIZE * 2));
   let cy = (zoom.offsetHeight - (ZOOM_BORDER_SIZE * 2)) / (lens.offsetHeight - (LENS_BORDER_SIZE * 2));

   updateLens();
   updateZoom();

   posZoomY = lens.getBoundingClientRect().y - imagePosition.y + LENS_BORDER_SIZE;
   posZoomX = lens.getBoundingClientRect().x - imagePosition.x + LENS_BORDER_SIZE;

   // Update the zoom itself
   zoom.style.backgroundSize = (imagePosition.width * cx) + "px " + (imagePosition.height * cy) + "px";
   zoom.style.backgroundPosition = `-${posZoomX * cx}px -${posZoomY * cy}px`;

   /**
    * Update the position of the lens so it cannot move outside the picture
    */
   function updateLens() {
      // Stop the lens resize to go outside picture (top)
      if(lens.getBoundingClientRect().top < imagePosition.top) {
         lens.style.top = 0 + 'px';
      }
      // Stop the lens resize to go outside picture (bottom)
      if(lens.getBoundingClientRect().bottom > imagePosition.bottom) {
         lens.style.top = imagePosition.height - lens.getBoundingClientRect().height + 'px';
      }

      // Stop the lens resize to go outside picture (right)
      if(lens.getBoundingClientRect().right > imagePosition.right) {
         lens.style.left = imagePosition.width - lens.getBoundingClientRect().width + 'px';
      }
      // Stop the lens resize to go outside picture (right)
      if(lens.getBoundingClientRect().left < imagePosition.left) {
         lens.style.left = 0 + 'px';
      }
   }

   /**
    * Update the position of the zoom so it cannot move outside the window
    */
   function updateZoom() {
      // Stop the zoom resize to go outside picture (top)
      if(zoom.getBoundingClientRect().top < 0) {
         zoom.style.top = -imagePosition.top + 'px';
      }
      // Stop the zoom resize to go outside picture (bottom)
      if(zoom.getBoundingClientRect().bottom > window.innerHeight) {
         zoom.style.top = window.innerHeight - imagePosition.top - zoom.getBoundingClientRect().height +  'px';
      }

      // Stop the zoom resize to go outside picture (right)
      if(zoom.getBoundingClientRect().right > window.innerWidth) {
         zoom.style.left = window.innerWidth - zoom.getBoundingClientRect().width - imagePosition.left + 'px';
      }
      // Stop the zoom resize to go outside picture (left)
      if(zoom.getBoundingClientRect().left < 0) {
         zoom.style.left = -imagePosition.left + 'px';
      }
   }
}

// TODO: While zooming move element so cursor always stay inside
// TODO: verify calculation with border (bugged min zoom on right to see)
