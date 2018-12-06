import { Component, OnInit } from '@angular/core';
import { Project } from './project/project.model';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    projects: Project[] = [
        new Project(
            'Fondation Père Sablon',
            'NPO Website / Collaboration with <a href="https://tomtom.design/">Tom&Tom</a>',
            `wordpress, visual composer & gravity forms;<br>
                    php & safesave API;`,
            `coded part of front-end pages;<br>
                created donation form with gravity forms;<br>
                linked gravity forms to two different online payment gateways;<br>
                created credit card payment form with safesave API;`,
            'https://fondationsablon.com/',
            'http://karinesh.com/wp-content/uploads/2018/01/sablon.png'
        ),
        new Project(
            'NM Pangea',
            'Blog / Information',
            `wordpress, ACF, google translate;<br>
                    html5, php, less, jquery;`,
            `created custom wordpress theme;<br>
                coded part of the front-end pages;<br>
                javascript & animations;`,
            'http://nmpangea.com/',
            'http://karinesh.com/wp-content/uploads/2018/01/nmpangea.png'
        )
    ];

    constructor() { }

    ngOnInit() {
    }

}
