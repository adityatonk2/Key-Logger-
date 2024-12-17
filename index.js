//  selecting all the elements using dom methods 
        const logDiv = document.querySelector("#log-div");
        const stateDiv = document.querySelector("#state-div");
        const startButton = document.querySelector("#start-btn");
        const stopButton = document.querySelector("#stop-btn");

        // adding event listener to start button then it will trigger two more document changes

        startButton.addEventListener("click", () => {
            startButton.disabled = true;
            stopButton.disabled = false;
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("keyup", handleKeyUp);
        });

        // stop button to remove event listeners 

        stopButton.addEventListener("click", () => {
            startButton.disabled = false;
            stopButton.disabled = true;
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
            logDiv.textContent = "";
            stateDiv.textContent = "";
        });

        // function to handle keys up and down and printing their text content into log and state div

        function handleKeyDown(e) {
            logDiv.textContent = `Key ${e.key} pressed Down`;
            stateDiv.textContent = "Key is Down";
        }

        function handleKeyUp(e) {
            logDiv.textContent = `Key ${e.key} released`;
            stateDiv.textContent = "Key is Up";
        }