import htmlIcon from './icons/html.png';
import cssIcon from './icons/css.png';
import javascriptIcon from './icons/javascript.png';
import jqueryIcon from './icons/jquery.png';
import bootstrapIcon from './icons/bootstrap.png';
import commandIcon from './icons/command.png';
import reactIcon from './icons/react.png';


export const data = [
    {
        id: 'web-html',
        title: 'HTML',
        icon: htmlIcon,
        tooltip: {
            content:
                'HyperText Markup Language (HTML) is the standard markup language used to create web pages. A markup language is your way of making notes in a digital document that can be distinguished from regular text. It’s the most basic building block you’ll need for developing websites.',
        },
        children: [
            {
                id: 'web-css',
                title: 'CSS',
                icon: cssIcon,
                tooltip: {
                    content:
                        'CSS (Cascading Style Sheets) is the language used to present the document you create with HTML. Where HTML comes first and creates the foundation for your page, CSS comes along next and is used to create the page’s layout, color, fonts, and…well, the style!',
                },
                children: [
                    {
                        id: 'web-bootstrap',
                        title: 'Bootstrap',
                        icon: bootstrapIcon,
                        tooltip: {
                            content:
                                'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.',
                        },
                        children: [],
                    },
                ],
            },
            {
                id: 'web-javascript',
                title: 'JavaScript',
                icon: javascriptIcon,
                tooltip: {
                    content:
                        'JavaScript is a programming language used to implement interactive features like audio and video, games, scrolling abilities and page animations.',
                },
                children: [
                    {
                        id: 'web-jquery',
                        title: 'jQuery',
                        icon: jqueryIcon,
                        tooltip: {
                            content:
                                'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
                        },
                        children: [],
                    },
                    {
                        id: 'web-command',
                        title: 'Command Line',
                        icon: commandIcon,
                        tooltip: {
                            content:
                                'There are going to be times when you’ll need to open a terminal on your computer where you can enter typed commands (command line) to get what you need.',
                        },
                        children: [
                            {
                                id: 'web-react',
                                title: 'React',
                                icon: reactIcon,
                                tooltip: {
                                    content:
                                        'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.',
                                },
                                children: [],
                            }
                        ],
                    },
                ],
            },
        ],
    },
];

export default data;