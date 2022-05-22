import * as React from "react";
import { motion } from "framer-motion";

const Surf = (props) => (
  <motion.svg
    initial={{ opacity: 0 }}
    whileInView={{
      y: [-20, 0],
      opacity: 1,
      scaleY:[1,1.1,1]
    }}
    transition={{
      default:{
        duration:0.8,
      },
      scaleY:{
        delay:3.2,
        duration:0.8
      }
    }}
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={120}
    viewBox="0 0 503.602 503.603"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M-3325.849 242.862c.042-12.545-3.229-24.967-9.522-35.855a71.788 71.788 0 0 0-26.167-26.293l-5.716-3.313.581-6.623a53.16 53.16 0 0 0 0-8.904l-.041-1.075c0-13.582-5.301-26.672-14.949-36.28-9.605-9.646-22.441-15.492-36.021-15.492h-10.974l-2.442-6.286c-5.756-15.941-19.004-27.324-35.443-31.506a50.957 50.957 0 0 0-12.505-1.55 50.847 50.847 0 0 0-33.951 12.951l-6.915 6.08-6.874-6.169c-9.358-8.363-21.406-13.044-33.953-13.044-4.224 0-8.404.33-12.504 1.365-16.437 4.184-29.688 15.976-35.443 31.875l-2.442 6.286h-10.972c-13.623 0-26.416 5.846-36.023 15.492-9.647 9.607-14.947 23.067-14.947 36.649l-.04.89a52.068 52.068 0 0 0 0 8.812l.578 6.618-5.796 3.313c-20.579 11.635-34.036 32.583-36.023 56.183-1.945 23.56 7.826 46.458 26.21 61.363l6.667 5.299-4.058 7.412c-11.843 22.109-11.18 48.693 1.779 70.18 12.836 21.284 36.272 33.789 61.155 33.789h11.469l2.442 7.577c5.756 15.943 19.006 28.632 35.443 32.813a50.98 50.98 0 0 0 12.504 1.563c12.547 0 24.594-4.623 33.953-12.903l6.874-6.203 6.915 6.134c9.356 8.321 21.406 12.834 33.951 12.834 4.183 0 8.407-.661 12.505-1.696 16.438-4.181 29.687-16.601 35.443-32.544l2.442-7.576h10.974c24.8 0 48.153-12.794 60.864-34.201 12.712-21.366 13.291-47.595 1.532-69.54l-4.058-7.547 6.708-5.37c16.936-13.579 26.707-33.77 26.79-55.508zm-201.587-32.213-16.755-8.861c-3.975-2.235-9.207-4.223-13.471-5.796-.704-.249-1.871-.414-2.989-.414-2.485 0-4.807.869-6.67 2.524-2.691 2.361-3.873 6.045-3.129 9.607.708 3.521 3.47 6.46 6.906 7.618 10.104 3.644 19.398 10.103 25.443 18.675 6.087 8.61 10.664 18.715 10.664 29.272v49.562l-16.755-8.819c-3.975-2.276-9.207-4.266-13.471-5.839-.704-.246-1.871-.412-2.989-.412-2.485 0-4.807.909-6.67 2.527-2.691 2.397-3.873 6.085-3.129 9.603.708 3.562 3.47 6.462 6.906 7.618 10.104 3.644 19.358 10.104 25.443 18.718 6.087 8.571 10.664 18.713 10.664 29.274v40.908c0 8.236-4.499 15.979-10.296 21.777-5.839 5.795-14.631 9.025-22.869 9.025-6.045-.04-11.933-1.819-16.901-5.091a30.906 30.906 0 0 1-11.308-13.376l-3.705-8.446 7.896-4.638a70.48 70.48 0 0 0 8.607-5.92c2.608-2.151 3.931-5.799 3.35-9.356a10.191 10.191 0 0 0-6.46-7.743c-3.354-1.242-7.245-.579-9.979 1.698-9.191 7.698-20.911 11.964-32.96 11.964-13.706 0-26.582-5.301-36.27-14.989-9.648-9.688-14.989-22.521-14.989-36.229.125-9.769 2.939-19.17 8.198-27.285l3.726-5.754 6.791 1.201a68.015 68.015 0 0 0 11.924 1.075c3.728 0 7.08-1.944 8.903-5.05a10.232 10.232 0 0 0 0-10.104c-1.823-3.105-5.175-5.051-8.778-5.051-6.293 0-12.256-1.12-17.888-3.396-12.13-4.347-22.192-13.291-28.114-25.092-5.919-11.758-7.08-25.215-3.229-37.843 3.809-12.587 12.215-23.146 23.685-29.646l6.583-3.727 5.548 5.093a54.871 54.871 0 0 0 7.867 6.003c2.444 1.366 6.75 1.575 9.856-.206a10.291 10.291 0 0 0 5.05-8.819c0-3.645-1.945-6.997-5.093-8.778-4.347-2.401-8.073-6.045-10.683-10.477-2.939-5.093-4.264-10.764-3.892-16.479.083-8.073 3.271-15.65 9.027-21.406 5.63-5.631 13.084-8.819 21.034-8.985a25.641 25.641 0 0 1 6.417.083l6.376.87 2.03 6.127a68.13 68.13 0 0 0 3.188 7.992c1.365 2.236 3.478 3.81 6.002 4.513 2.525.663 5.424.291 7.743-1.035 2.07-1.284 3.686-3.395 4.389-5.962.661-2.525.415-5.176-.829-7.452-2.568-4.681-3.809-9.896-3.85-15.155 0-11.055 6.128-21.24 15.608-26.747 9.358-5.384 22.262-5.384 31.622 0 9.481 5.465 16.672 15.692 16.672 26.664v90.387zm148.713 79.936-1.696.441h-.869c-5.052 4-10.351 2.875-15.775 2.875-3.769 0-7.123 2.159-8.944 5.264a10.23 10.23 0 0 0 0 10.108c1.822 3.105 5.176 5.053 8.736 5.053a68.36 68.36 0 0 0 12.09-1.075l6.791-1.199 3.726 5.752c5.218 8.115 8.075 17.518 8.198 27.162 0 13.833-5.341 26.666-14.987 36.354-9.565 9.522-22.773 14.989-36.229 14.989a51.465 51.465 0 0 1-33.042-12.009c-2.03-1.653-4.68-2.523-7.371-2.276a10.234 10.234 0 0 0-6.832 3.603 10.248 10.248 0 0 0-2.276 7.412c.247 2.692 1.49 5.135 3.601 6.833a71.81 71.81 0 0 0 8.406 5.795l7.907 4.638-3.767 8.446c-2.402 5.467-6.376 10.104-11.346 13.376-4.967 3.271-11.012 5.051-16.976 5.091-8.322 0-15.942-3.23-21.738-9.025-5.796-5.839-9.318-13.582-9.318-21.777v-40.868c0-10.602 3.603-20.702 9.65-29.314 6.085-8.613 15.155-15.074 25.049-18.633 3.646-1.241 5.984-4.141 6.689-7.703.704-3.518-.695-7.205-3.426-9.603-2.65-2.361-6.826-3.15-10.182-1.989-3.935 1.491-7.968 3.437-11.943 5.713l-15.837 8.859v-49.561c0-10.558 3.603-20.66 9.65-29.273 6.085-8.652 15.155-15.071 25.049-18.673 3.603-1.2 5.984-4.14 6.689-7.66.704-3.562-.695-7.246-3.426-9.607-2.65-2.359-6.786-3.146-10.182-2.027-3.935 1.49-7.968 3.478-11.943 5.713l-15.837 8.861v-90.388c0-10.972 6.171-21.199 15.695-26.664 9.316-5.384 22.069-5.384 31.385 0 9.522 5.465 15.257 15.692 15.257 26.664-.04 5.382-1.479 10.601-4.004 15.195-1.49 2.568-1.901 5.342-1.238 7.909.703 2.567 2.385 4.845 4.662 6.169 2.318 1.326 5.126 1.698 7.691.994 2.444-.663 4.592-2.236 5.917-4.389 1.241-2.774 2.316-5.591 3.146-8.404l1.945-6.377 6.54-.912c2.153-.289 4.307-.331 6.417-.083 7.992.166 15.444 3.354 21.117 9.027 5.796 5.797 8.985 13.54 8.985 21.738-.041 6.168-1.862 12.007-5.216 17.017-2.444 3.892-6.087 7.329-10.394 9.647-2.94 1.698-4.885 5.051-4.885 8.695a10.29 10.29 0 0 0 5.05 8.819c3.105 1.781 7.08 1.781 10.186 0 3.188-1.739 5.962-3.686 8.489-5.922l5.507-4.885 6.417 3.601c11.469 6.377 19.999 16.812 23.931 29.398 3.935 12.547 2.939 25.87-2.814 37.671-5.757 11.885-15.736 20.777-28.075 25.414zM-2076.874 219.975c-.815-4.978-5.507-8.356-10.479-7.535-4.973.814-8.344 5.507-7.527 10.482 8.425 51.455 8.71 103.737 1.056 154.236l-98.562-88.819V.165c42.556 52.581 71.728 114.305 88.878 181.196 1.213 4.921 6.326 7.853 11.079 6.615 4.886-1.233 7.846-6.195 6.617-11.079-17.324-68.726-47.707-131.304-90.293-186.057-5.74-7.42-14.753-11.67-24.732-11.67-22.757-.461-31.968 22.685-43.843 37.993a9.127 9.127 0 0 0 2.446 12.668 9.123 9.123 0 0 0 12.67-2.442c6.029-8.839 12.26-17.593 18.928-25.943v287.017l-97.286 87.668c-15.626-105.999 4.07-218.739 56.481-313.118 2.446-4.407.855-9.959-3.55-12.409-4.409-2.44-9.961-.854-12.403 3.55-33.142 59.682-54.411 127.673-61.507 196.63-7.068 68.675-.142 138.764 20.023 202.688l42.014 133.191c4.785 16.959 30.727 20.728 40.975 6.753l20.628-25.785c1.771-2.418 7.08-2.418 8.857 0l20.628 25.785c10.442 14.06 36.146 10.146 40.974-6.753l42.014-133.191c23.318-73.92 28.821-154.672 15.914-233.497m-20.656 178.403c-3.33 16.813-7.549 33.388-12.666 49.609l-4.683 14.848-77.507-69.382v-80.55l94.856 85.475zm-113.106-85.354v80.429l-76.456 68.436-4.385-13.901c-5.224-16.554-9.482-33.455-12.81-50.575l93.651-84.389zm-8.877 243.211-20.628 25.777c-2.685 2.641-7.222 2.794-9.32-.837l-31.606-100.182 70.431-63.05v131.583c-3.467 1.481-6.518 3.758-8.877 6.709m67.304 24.941c-2.095 3.623-6.637 3.478-9.32.837l-20.624-25.777c-2.667-3.336-6.207-5.803-10.232-7.237V417.953l71.482 63.983-31.306 99.24z" />
    <g fill="#539295">
      <path d="M-796.002 407.12h31.168c5.211 0 9.441-4.229 9.441-9.445s-4.23-9.441-9.441-9.441h-31.168c-48.393 0-87.76-39.372-87.76-87.764 0-15.106 12.293-27.398 27.402-27.398 15.111 0 27.402 12.292 27.402 27.398a9.444 9.444 0 0 0 18.342 3.17c11.107-31.24 3.143-66.554-20.281-89.983-8.52-8.514-18.293-15.446-29.068-20.598-4.699-2.248-10.344-.259-12.596 4.448-2.248 4.698-.256 10.343 4.447 12.591a86.39 86.39 0 0 1 23.855 16.918c10.76 10.757 17.344 24.724 19.18 39.367-8.24-7.567-19.23-12.195-31.281-12.195-25.521 0-46.285 20.759-46.285 46.282 0 58.807 47.838 106.65 106.643 106.65M-1190.467 388.229h-39.031c-5.213 0-9.445 4.229-9.445 9.446 0 5.216 4.232 9.445 9.445 9.445h39.031c43.73 0 85.648-13.311 121.23-38.494 20.396-14.435 37.832-32.113 51.75-52.282 2.502 29.372 14.955 58.048 37.385 80.473a9.417 9.417 0 0 0 6.68 2.766 9.431 9.431 0 0 0 6.68-2.766c3.684-3.688 3.684-9.672 0-13.359-43.135-43.128-43.135-113.314 0-156.442 6.992-7.003 15.025-12.697 23.861-16.916 4.703-2.256 6.699-7.895 4.447-12.6-2.252-4.701-7.893-6.69-12.596-4.442-10.775 5.151-20.557 12.082-29.072 20.598a129.2 129.2 0 0 0-20.621 26.889c-26.824-17.848-42.711-47.333-42.711-79.762 0-16.794 13.666-30.463 30.463-30.463s30.459 13.669 30.459 30.463a9.45 9.45 0 0 0 7.846 9.308 9.456 9.456 0 0 0 10.504-6.146c11.928-33.544 3.373-71.48-21.785-96.639-21.436-21.438-49.934-33.237-80.248-33.237-30.309 0-58.809 11.799-80.242 33.237-15.629 15.634-27.096 34.321-33.836 54.716-11.658 30.935-30.84 59.011-55.545 81.258-3.873 3.485-4.186 9.462-.699 13.337a9.436 9.436 0 0 0 7.027 3.122 9.403 9.403 0 0 0 6.311-2.426c13.744-12.367 25.912-26.404 36.223-41.666 2.297 33.609 16.477 64.882 40.52 88.924a9.406 9.406 0 0 0 6.68 2.774 9.4 9.4 0 0 0 6.68-2.774c3.684-3.68 3.684-9.664 0-13.352-22.781-22.781-35.328-53.064-35.328-85.277 0-32.218 12.547-62.502 35.328-85.275 17.863-17.874 41.619-27.716 66.883-27.716 25.268 0 49.023 9.842 66.887 27.716 12.305 12.298 19.623 28.44 21.232 45.252-8.936-8.944-21.279-14.492-34.895-14.492-27.213 0-49.352 22.142-49.352 49.354 0 20.139 5.293 39.95 15.309 57.288 9.273 16.053 22.391 29.704 38.033 39.636a122.655 122.655 0 0 0-2.143 5.885c-27.69 74.556-99.794 124.639-179.345 124.639M-758.154 449.973a9.44 9.44 0 0 0-13.365 0c-14.617 14.613-38.404 14.613-53.018-.008-21.988-21.98-57.752-21.98-79.74.008-14.617 14.613-38.402 14.613-53.023-.008-10.646-10.643-24.807-16.514-39.867-16.505-15.059 0-29.219 5.863-39.869 16.514-14.617 14.613-38.404 14.613-53.021-.008-10.652-10.643-24.809-16.514-39.865-16.505-15.066 0-29.223 5.863-39.873 16.514-14.617 14.613-38.404 14.613-53.025 0-3.684-3.696-9.668-3.696-13.355 0-3.688 3.679-3.688 9.664 0 13.352 21.984 21.98 57.752 21.98 79.74 0 7.08-7.084 16.49-10.982 26.51-10.982 10.016 0 19.428 3.898 26.508 10.982 21.988 21.98 57.754 21.98 79.738 0 7.08-7.084 16.498-10.982 26.514-10.982 10.012 0 19.428 3.898 26.512 10.982 21.98 21.98 57.75 21.98 79.738 0 14.617-14.622 38.404-14.622 53.018 0 10.994 10.99 25.434 16.489 39.869 16.489 14.439 0 28.877-5.5 39.877-16.489 3.68-3.691 3.68-9.667-.003-13.354M-905.504 201.647a9.512 9.512 0 0 1-6.672-2.766 9.517 9.517 0 0 1-2.77-6.678 9.544 9.544 0 0 1 2.77-6.688 9.5 9.5 0 0 1 6.672-2.755c2.488 0 4.922 1 6.676 2.755a9.515 9.515 0 0 1 2.77 6.688 9.502 9.502 0 0 1-2.77 6.678 9.486 9.486 0 0 1-6.676 2.766" />
      <path d="M-905.504 201.647a9.512 9.512 0 0 1-6.672-2.766 9.517 9.517 0 0 1-2.77-6.678 9.544 9.544 0 0 1 2.77-6.688 9.5 9.5 0 0 1 6.672-2.755c2.488 0 4.922 1 6.676 2.755a9.515 9.515 0 0 1 2.77 6.688 9.502 9.502 0 0 1-2.77 6.678 9.486 9.486 0 0 1-6.676 2.766" />
    </g>
    <g fill="#539295">
      <path d="m257.268 419.124 3.55 14.047a229.78 229.78 0 0 0 119.816-75.912 226.02 226.02 0 0 0 51.971-134.077l-14.468-.704a211.673 211.673 0 0 1-48.663 125.55 215.176 215.176 0 0 1-112.206 71.096M34.513 425.63h101.402v14.488H34.513z" />
      <path d="M468.846 202.861c-.404-1.507-.78-2.869-1.209-4.357a225.118 225.118 0 0 0-79.757-117.05 227.94 227.94 0 0 0-138.149-46.941h-59.75c-61.834.073-111.941 50.181-112.009 112.012.004 38.138 30.921 69.059 69.062 69.062h10.61a7.242 7.242 0 0 0 7.241-7.246 7.257 7.257 0 0 0-2.118-5.119l-.615-.614c-3.772-3.772-3.772-9.891 0-13.667a9.683 9.683 0 0 1 4.488-2.543 7.244 7.244 0 0 0 3.369-12.146l-13.408-13.413c-4.864-4.859-4.864-12.753 0-17.613 4.864-4.864 12.753-4.864 17.617 0 .942.946 1.73 2.038 2.333 3.233a56.388 56.388 0 0 0 39.634 30.279l12.466 2.493c3.923.782 7.743-1.755 8.524-5.68a7.234 7.234 0 0 0-1.307-5.766l-10.092-13.461c-4.027-5.365-2.94-12.983 2.426-17.009a12.152 12.152 0 0 1 15.883 1.13l17.079 17.076a7.239 7.239 0 0 0 10.242-.004 7.23 7.23 0 0 0 2.123-5.117v-20.826a8.145 8.145 0 0 1 16.226-1.011l1.855 14.831c2.686 20.788 17.792 37.831 38.102 43.003a7.244 7.244 0 0 0 8.863-8.448l-2.126-10.605a31.656 31.656 0 0 1 4.383-23.355l.975 6.846c2.919 20.815 18.203 37.758 38.606 42.804a7.24 7.24 0 0 0 9.001-7.028v-15.624c0-5.321 4.318-9.632 9.636-9.632 5.321-.004 9.636 4.311 9.636 9.632 0 .534-.045 1.06-.13 1.585l-4.557 27.336a7.242 7.242 0 0 0 5.956 8.336 7.257 7.257 0 0 0 2.612-.038l21.612-4.327a36.421 36.421 0 0 1 20.419 1.846c-.554 137.611-112.267 248.876-249.878 248.876H34.513v14.488h170.21c146.006 0 264.366-118.361 264.366-264.367 0-.629-.081-1.256-.243-1.861m-37.507-13.183-11.321 2.264 2.83-16.986c2.191-13.138-6.692-25.564-19.829-27.759-13.142-2.191-25.567 6.688-27.759 19.825a24.258 24.258 0 0 0-.327 3.967v5.07a37.005 37.005 0 0 1-18.782-27.272l-3.021-21.134a7.24 7.24 0 0 0-8.196-6.147 7.175 7.175 0 0 0-2.992 1.142 46.069 46.069 0 0 0-20.188 44.558 36.582 36.582 0 0 1-15.766-25.602l-1.856-14.831c-1.553-12.406-12.866-21.204-25.264-19.651-11.325 1.413-19.82 11.042-19.82 22.455v3.34l-4.715-4.715c-9.401-9.316-24.196-10.367-34.818-2.473-10.922 8.19-13.882 23.307-6.862 35.017a41.988 41.988 0 0 1-23.145-20.761c-6.655-13.308-22.842-18.701-36.148-12.046-13.308 6.651-18.701 22.836-12.05 36.145a26.98 26.98 0 0 0 5.046 7.004l6.587 6.584a24.47 24.47 0 0 0-7.561 23.406c-29.481-.894-52.921-25.054-52.926-54.551.065-53.835 43.69-97.464 97.525-97.524h59.75c89.515.004 169.413 56.151 199.747 140.373a50.77 50.77 0 0 0-18.139.302" />
      <path d="M337.086 350.931a191.196 191.196 0 0 0 52.334-131.722c0-3.742-.113-7.543-.327-11.283l-14.464.837c.202 3.465.304 6.98.304 10.446a176.748 176.748 0 0 1-48.385 121.779l10.538 9.943zM34.513 396.658h108.644v14.488H34.513zM307.977 328.372a156.013 156.013 0 0 0 35.72-128.497l-14.273 2.456a142.633 142.633 0 0 1 2.051 24.117 141.177 141.177 0 0 1-34.451 92.438l10.953 9.486zM34.513 367.688h123.132v14.487H34.513zM34.513 338.72h144.861v14.483H34.513zM282.943 299.235c26.08-39.804 26.08-91.281 0-131.081l-12.11 7.955c22.91 34.97 22.91 80.196 0 115.172l12.11 7.954zM183.276 257.592c-8.229 2.418-12.936 11.047-10.514 19.275a15.517 15.517 0 0 0 14.893 11.147h14.338l5.661 14.156-13.028 26.064a7.19 7.19 0 0 0-.684 4.262h-.012l5.818 40.709c1.464 10.319 11.019 17.488 21.338 16.021a18.866 18.866 0 0 0 15.931-15.446l6.058 4.036c7.808 5.208 18.361 3.097 23.569-4.711a17.019 17.019 0 0 0 .437-18.18l-14.686-24.475a56.443 56.443 0 0 0 6.647-26.707v-8.483h-.009a7.14 7.14 0 0 0-.206-1.759l-10.016-40.065a22.708 22.708 0 0 0-.425-13.042l-.654-1.983a22.771 22.771 0 0 0-21.621-15.581c-1.1.004-2.195.085-3.283.24v-7.482c0-11.999-9.729-21.729-21.729-21.729-11.997 0-21.726 9.73-21.726 21.729v14.483c.017 11.233 8.572 20.607 19.757 21.639l-.551 1.379-15.303 4.503zm54.461 11.272 5.196 20.788-22.858 4.565-2.588-6.458a7.226 7.226 0 0 0 3.219-1.864l17.031-17.031zm-2.996 61.95-22.923-4.577 8.666-17.326 24.066-4.815a41.842 41.842 0 0 1-9.809 26.718m-16.303 44.119a4.418 4.418 0 0 1-4.351-3.776l-4.366-30.572 13.108 2.624v27.33a4.4 4.4 0 0 1-4.391 4.394m36.221-12.551a2.515 2.515 0 0 1-.865 3.449 2.527 2.527 0 0 1-2.685-.064l-13.792-9.199v-10.609c1.916 0 3.76-.757 5.118-2.115.23-.234.449-.473.672-.703l11.552 19.241zm-20.67-119.388.663 1.983a8.27 8.27 0 0 1-2.01 8.498l-20.056 20.056h-24.932c-.574 0-1.044-.47-1.044-1.044 0-.461.308-.873.753-1.002l18.677-5.491a7.24 7.24 0 0 0 4.682-4.262l7.683-19.199a8.297 8.297 0 0 1 10.788-4.623 8.311 8.311 0 0 1 4.796 5.084m-40.132-12.923v-14.483a7.244 7.244 0 1 1 14.488 0v14.483a7.442 7.442 0 0 1-.158 1.466 23.347 23.347 0 0 0-2.62 4.228c-3.138 2.477-7.687 1.929-10.161-1.213a7.253 7.253 0 0 1-1.549-4.481" />
      <path d="M165.452 424.789a57.493 57.493 0 0 1 25.171-39.93l-8.015-12.065a71.954 71.954 0 0 0-32.206 60.078 7.241 7.241 0 0 0 7.242 7.246c.202 0 .4-.009.603-.028a226.413 226.413 0 0 0 150.041-74.44l6.842-7.602a7.241 7.241 0 0 0-2.144-11.322l-28.976-14.487a7.24 7.24 0 0 0-5.996-.219l-7.242 2.98 5.516 13.396 4.197-1.727 17.512 8.759-.48.533a211.91 211.91 0 0 1-132.065 68.828" />
    </g>
  </motion.svg>
);

export default Surf;
