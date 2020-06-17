const logos = [
    {
        type: 'main logo',
        icon: 'mainLogo',

    },
    {
        type: 'small logo',
        icon: 'smallLogo',

    }

]
const links = [
    {
        title: 'Prerequisites',
        path: '/Prerequisites',
        icon: 'Prerequisites',
        type: 'Network prevention',
        isActivePoint: false
    },
    {
        title: 'Dry Run',
        path: '/Dry-Run',
        icon: 'DryRun',
        type: 'Network prevention',
        extensions: [{ name: 'VR' }, { name: 'VRwrapper' }],
        isActivePoint: false
    },
    {
        title: 'Prevention',
        path: '/Prevention',
        icon: 'Prevention',
        type: 'Network prevention',
        isActivePoint: true
    },
    {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: 'Dashboard',
        type: 'rest of links',
        isActivePoint: false
    },
    {
        title: 'Assets',
        path: '/Assets',
        icon: 'Assets',
        type: 'rest of links',
        isActivePoint: false
    },
    {
        title: 'Activities',
        path: '/Activities',
        icon: 'Activities',
        type: 'rest of links',
        isActivePoint: false
    },
    {
        title: 'Detections',
        path: '/Detections',
        icon: 'Detections',
        type: 'rest of links',
        isActivePoint: false
    },
    {
        title: 'Change log',
        path: '/Change-log',
        icon: 'ChangeLog',
        type: 'rest of links',
        isActivePoint: false
    },
    {
        title: 'Settings',
        path: '/Settings',
        icon: 'Settings',
        type: 'rest of links',
        extensions: [{ name: 'Circle' }],
        isActivePoint: false
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