/* Reset and base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    height: 100vh;
    overflow: hidden;
    background-color: #0a0a0a;
    color: #f0f0f0;
    position: relative;
}

/* Animated background */
.background-animation {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0a0a0a, #0f0f3f);
    overflow: hidden;
    z-index: -1;
    animation: bgMove 15s infinite linear;
}

@keyframes bgMove {
    0% {background-position: 0 0;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0 0;}
}

/* Auth container */
.auth-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(10, 10, 10, 0.85);
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 0 20px gold;
    text-align: center;
    width: 320px;
}

.auth-container h1 {
    margin-bottom: 20px;
    color: gold;
    font-size: 2em;
}

.auth-container h1 .capital-x {
    color: white;
    margin-left: 5px;
    font-size: 2.2em;
    font-weight: bold;
}

.auth-toggle button {
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: darkblue;
    color: gold;
    font-weight: bold;
    transition: all 0.3s;
}

.auth-toggle button.active {
    background-color: gold;
    color: darkblue;
}

.auth-toggle button:hover {
    opacity: 0.8;
}

.auth-container form {
    display: flex;
    flex-direction: column;
}

.auth-container input {
    margin: 10px 0;
    padding: 12px;
    border-radius: 8px;
    border: none;
}

.auth-container button[type="submit"] {
    background-color: gold;
    color: darkblue;
    font-weight: bold;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.3s;
}

.auth-container button[type="submit"]:hover {
    opacity: 0.9;
}

.theme-toggle {
    margin-top: 15px;
    cursor: pointer;
    font-size: 0.9em;
    color: gold;
}
