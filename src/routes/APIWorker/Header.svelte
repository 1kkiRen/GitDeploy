<header id="header">
    <div class="main-title" id="main-title">
        <div class="dropdown" id="dropdown">
            <a href="/APIWorker">API Worker</a>
            <div class="arrow" id="arrow"></div>
        </div>
        <ul class="dropdown-content" id="dropdown-content">
            <li><a href="/">Portfolio</a></li>
        </ul>
    </div>

    <div class="request-sender" id="request-sender">
        <p class="request-sender-p" id="request-sender-p">Enter your email:</p>
        <input type="text" id="email">
        <button id="submit">Submit</button>
    </div>

    <style>
        header {
            width: 100%;
            height: 100vh;
            padding: 3.5rem 9rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #1c2333;
            border-bottom: 2px solid #151a25;
            transition: all 1s ease-in-out;
        }

        header.shrink {
            position: fixed;
            height: 50px;
            transition: all 1s ease-in-out;
        }

        header .dropdown {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: baseline;
            transition: all 0.3s ease-in-out;
        }

        header .dropdown-content {
            opacity: 0;
            height: 0;
            overflow: hidden;
            transition: all 0.5s ease-in-out;
        }

        .dropdown-content.show {
            opacity: 1;
            height: 3rem;
        }

        header .dropdown-content li {
            list-style: none;
            transition: all 0.3s ease-in-out;
        }

        header .dropdown-content li a {
            text-decoration: none;
            color: #fff6ec;
            font-size: 1.5rem;
            transition: all 0.3s ease-in-out;
        }

        header .dropdown-content li:hover {
            border-bottom: 2px solid #fff6ec;
        }

        header .main-title .dropdown .arrow {
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #fff6ec;
            transition: all 0.3s ease-in-out;
        }

        header .main-title:hover .arrow {
            border-top: 5px solid #1c2333;
            transition: all 0.3s ease-in-out;
        }

        header .main-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease-in-out;
        }

        header .main-title a {
            font-size: 3rem;
            color: #fff6ec;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
        }

        header .request-sender {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            opacity: 1;
            transition: all 0.3s ease-in-out;
        }

        .request-sender.hide {
            display: inline-block;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
        }

        header .request-sender p {
            font-size: 1.5rem;
            color: #fff6ec;
            margin-bottom: 1rem;
            transition: all 0.3s ease-in-out;
        }

        header .request-sender input {
            width: 20rem;
            height: 3rem;
            border: 2px solid #fff6ec;
            border-radius: 5px;
            padding: 0 1rem;
            margin-bottom: 1rem;
            font-size: 1rem;

            transition: all 0.3s ease-in-out;
        }

        header .request-sender button {
            width: 10rem;
            height: 3rem;
            border: 2px solid #fff6ec;
            border-radius: 5px;
            background-color: #1c2333;
            font-size: 1rem;
            color: #fff6ec;
            transition: all 0.3s ease-in-out;
        }

        header .request-sender button:hover {
            background-color: #fff6ec;
            color: #1c2333;
            transition: all 0.3s ease-in-out;
        }
    </style>

    <script lang="ts">
        import { formatDistanceToNow } from 'date-fns';

        const email = document.getElementById('email') as HTMLInputElement;
        const submit = document.getElementById('submit') as HTMLButtonElement;
                
        const title = document.getElementById('title') as HTMLHeadingElement;
        const image = document.getElementById('image') as HTMLImageElement;
        const date = document.getElementById('date') as HTMLParagraphElement;  
        const dateFromPublish = document.getElementById('date-from-publish') as HTMLParagraphElement;      

        const header = document.getElementById('header') as HTMLDivElement;

        const requestedContent = document.getElementById('requested-content') as HTMLDivElement;
        const requestSender = document.getElementById('request-sender') as HTMLDivElement;

        const mainTitle = document.getElementById('main-title') as HTMLHeadingElement;
        const dropdownContent = document.getElementById('dropdown-content') as HTMLDivElement;


        function toggleDropdown() {
            dropdownContent.classList.toggle('show');
        }

        mainTitle.addEventListener('mouseover', toggleDropdown, true);
        mainTitle.addEventListener('mouseout', toggleDropdown, false);


        interface ComicResponse {
            safe_title: string;
            img: string;
            alt: string;
            year: number;
            month: number;
            day: number;
        }
        
        interface ApiDataResponse {
            id: number;
        }


        submit.addEventListener('click', () => {
            if (!validateEmail()) {
                return;
            }

            const params: URLSearchParams = new URLSearchParams();
            params.append('email', email.value);

            const api: Promise<Response> = fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);

            api
                .then((response: Response) => {
                    response.json().then((data: ApiDataResponse) => {
                        const comicApi: Promise<Response> = fetch(`https://fwd.innopolis.university/api/comic?id=${data}`);
                        comicApi
                            .then((response: Response) => {
                                response.json().then((data: ComicResponse) => {
                                    console.log(data);
                                    title.textContent = data.safe_title;
                                    image.src = data.img;
                                    image.alt = data.alt;
                                    date.textContent = new Date(data.year, data.month, data.day).toLocaleDateString();
                                    dateFromPublish.textContent = formatDistanceToNow(new Date(data.year, data.month, data.day), { addSuffix: true });
                                })
                            })
                            .catch((error: Error) => {
                                console.log(error);
                            })
                    })
                })
                .catch((error: Error) => {
                    console.log(error);
                })

            header.classList.add('shrink');
            requestedContent.classList.add('show');
            requestSender.classList.add('hide');
            requestedContent.scrollIntoView({ behavior: 'smooth' });

        });

        const emailEnd: string = '@innopolis.university';
        function validateEmail() {
            if (email.value.endsWith(emailEnd)) {
                return true;
            } else {
                alert('Please enter your @innopolis.university email');
                return false;
            }
        }
    </script>
</header>