//This is the title for your window tab, and your Radar
document.title = "雷卷(linux_china)的技术雷达";


//This is the concentic circles that want on your radar
var radar_arcs = [
    {'r': 100, 'name': '推荐'},
    {'r': 200, 'name': '试验'},
    {'r': 300, 'name': '评估'},
    {'r': 400, 'name': '待定'},
    {'r': 450, 'name': '过时'}
];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1360;

var radar_data = [
    {
        "quadrant": "技术",
        "left": 45,
        "top": 18,
        "color": "#8FA227",
        "items": [
            {"name": 'Git flow / Pull Requests ^', pc: {r: 230, t: 133}, movement: 'c'},
            {"name": "Domain Driven Design", "pc": {"r": 80, "t": 165}, "movement": "c"},
            {"name": "Events for messages - CQRS", "pc": {"r": 225, "t": 120}, "movement": "c"},
            {"name": "Continuous Experimentation", "pc": {"r": 230, "t": 110}, "movement": "c"},
            {"name": "SaaS for non-core systems", "pc": {"r": 170, "t": 150}, "movement": "c"},
            {"name": "Single Page App", "pc": {"r": 150, "t": 95}, "movement": "c", "url": "http://www.google.com"},
            {"name": "Continue Integration", "pc": {"r": 180, "t": 100}, "movement": "c"},
            {"name": "Polygot Programming", "pc": {"r": 180, "t": 170}, "movement": "c"},
            {"name": "Micro Service", "pc": {"r": 130, "t": 160}, "movement": "c"},
            {"name": "Clean Code", "pc": {"r": 130, "t": 120}, "movement": "c"},
            {"name": "Wide and Thin Front-Ends", "pc": {"r": 180, "t": 160}, "movement": "c"},
            {"name": "Zookeeper for App Config", "pc": {"r": 130, "t": 130}, "movement": "c"},
            {"name": "Evolutionary architecture", "pc": {"r": 120, "t": 95}, "movement": "c"},
            {"name": "Code Reviews", "pc": {"r": 110, "t": 110}, "movement": "c"},
            {"name": "Dependency Injection", "pc": {"r": 80, "t": 130}, "movement": "c"},
            {"name": "Coding architects", "pc": {"r": 90, "t": 170}, "movement": "c"}

        ]
    },
    {
        "quadrant": "工具",
        "left": w - 200 + 30,
        "top": 18,
        "color": "#587486",
        "items": [

            {"name": 'Docker', pc: {r: 30, t: 19}, movement: 'c', url: "http://docker.io"},
            {"name": 'Git', pc: {r: 30, t: 25}, movement: 'c', url: "http://docker.io"},
            {"name": 'IntelliJ IDEA', pc: {r: 180, t: 66}, movement: 'c', domain: 'mobile, dev'},
            {"name": 'Consul', pc: {r: 170, t: 29}, movement: 't'},
            {"name": 'Unitils', pc: {r: 170, t: 84}, movement: 'c', domain: 'back-end'},
            {"name": 'Hystrix', pc: {r: 150, t: 36}, movement: 'c'},
            {"name": 'Git', pc: {r: 130, t: 73}, movement: 'c'},

            {"name": 'Charles HTTP Proxy', pc: {r: 260, t: 48}, movement: 'c'},
            {"name": 'Kafka', pc: {r: 12, t: 25}, movement: 'c', domain: 'back-end'},
            {"name": 'Liquibase', pc: {r: 80, t: 76}, movement: 'c'},
            {"name": 'haproxy', pc: {r: 80, t: 46}, movement: 'c'},

            {"name": 'Hibernate ^', pc: {r: 380, t: 56}, movement: 'c'},
            {"name": 'mongoDB', pc: {r: 330, t: 5}, movement: 'c'},
            {"name": 'Subversion', pc: {r: 330, t: 18}, movement: 'c'},
            {"name": 'CVS', pc: {r: 360, t: 18}, movement: 'c'}
        ]
    },
    {
        "quadrant": "平台",
        "left": 45,
        "top": (h / 2 + 18),
        "color": "#DC6F1D",
        "items": [

            {"name": "AWS", "pc": {"r": 130, "t": 260}, "movement": "t"},
            {"name": 'Mesos', pc: {r: 260, t: 265}, movement: 't'},
            {"name": 'Marathon', pc: {r: 240, t: 268}, movement: 't'},
            {"name": 'Kubernetes', pc: {r: 270, t: 236}, movement: 't'},
            {"name": "JVM as platform", "pc": {"r": 90, "t": 265}, "movement": "c"},
            {"name": "Ruby On Rails", "pc": {"r": 390, "t": 215}, "movement": "c"},
            {"name": "Java EE - the Bad Parts", "pc": {"r": 390, "t": 245}, "movement": "c"},
            {"name": "RHEL 5", "pc": {"r": 370, "t": 195}, "movement": "c"}

        ]
    },
    {
        "quadrant": "语言和框架",
        "color": "#B70062",
        "left": (w - 200 + 30),
        "top": (h / 2 + 18),
        "items": [
            {"name": 'Guice', pc: {r: 60, t: 278}, movement: 'c'},
            {"name": 'RxJava', pc: {r: 150, t: 298}, movement: 'c', domain: 'template'},

            {"name": "Java 8", "pc": {"r": 130, "t": 355}, "movement": "c"},
            {"name": "Groovy ^", "pc": {"r": 190, "t": 280}, "movement": "c"},

            {"name": "Scala - the good parts ^", "pc": {"r": 290, "t": 320}, "movement": "c"},
            {"name": "Serverside Javascript", "pc": {"r": 220, "t": 275}, "movement": "c"},
            {"name": "Coffeescript", "pc": {"r": 270, "t": 282}, "movement": "c"},
            {"name": "Functional Reactive Programming", "pc": {"r": 285, "t": 330}, "movement": "c"},
            {"name": "Clojure", "pc": {"r": 280, "t": 310}, "movement": "c"},
            {"name": 'Web Components', pc: {r: 260, t: 330}, movement: 'c'},

            {"name": 'Mustache/Handlebars template', pc: {r: 50, t: 298}, movement: 'c', domain: 'template'},
            {"name": 'Spring 4', pc: {r: 360, t: 330}, movement: 'c'},
            {"name": "Java 6 and earlier", "pc": {"r": 390, "t": 350}, "movement": "c"}
        ]
    }
];
