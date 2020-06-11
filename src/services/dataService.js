const logos = [
    {
        type: 'main logo',
        img: '../assets/mainLogo.svg'
    },
    {
        type: 'small logo',
        svg: `<svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path d="M29.2836 0H13.9307L6.58914 7.05725H18.0283L5 20.4007V27.4579H29.2836V20.4007H16.2553L29.2836 7.05725V0Z" fill="white" />
                <path d="M5.51239 0V5.24066H5.55179C7.00959 3.84228 9.42613 1.516 11.0021 0H5.51239Z" fill="#0CD89B" />
                <path d="M39.2777 25.8774C39.2777 27.6025 37.8725 29.0009 36.1389 29.0009C34.4053 29.0009 33 27.6025 33 25.8774C33 24.1523 34.4053 22.7539 36.1389 22.7539C37.8725 22.7539 39.2777 24.1523 39.2777 25.8774Z" fill="#0CD89B" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="40" height="29" fill="white" />
                </clipPath>
            </defs>
        </svg>`

    }

]
const links = [
    {
        title: 'Prerequisites',
        path: '/Prerequisites',
        type: 'Network prevention'
    },
    {
        title: 'Dry Run',
        path: '/Dry-Run',
        type: 'Network prevention'
    },
    {
        title: 'Prevention',
        path: '/Prevention',
        type: 'Network prevention'
    },
    {
        title: 'Dashboard',
        path: '/Dashboard',
        type: 'rest of links'
    },
    {
        title: 'Assets',
        path: '/Assets',
        type: 'rest of links'
    },
    {
        title: 'Activities',
        path: '/Activities',
        type: 'rest of links'
    },
    {
        title: 'Detections',
        path: '/Detections',
        type: 'rest of links'
    },
    {
        title: 'Change log',
        path: '/Change-log',
        type: 'rest of links'
    },
    {
        title: 'Settings',
        path: '/Settings',
        type: 'rest of links'
    }
]
export default {
    getLogos,
    getLinks

};

function getLinks() {
    return links
}

function getLogos() {
    return logos
}