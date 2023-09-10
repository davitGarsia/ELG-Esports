import { Component } from '@angular/core';
import { News } from 'src/app/core/interfaces/news.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  news: News[] = [
    {
      image: '../../../assets/home/team.png',
      tag: 'tags',
      title: 'Title',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      author: 'ავტორი: ELG Esports  |  თარიღი: 5 აგვისტო, 2021',
    },
    {
      image: '../../../assets/home/team.png',
      tag: 'tags',
      title: 'Title',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      author: 'ავტორი: ELG Esports  |  თარიღი: 5 აგვისტო, 2021',
    },
    {
      image: '../../../assets/home/team.png',
      tag: 'tags',
      title: 'Title',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      author: 'ავტორი: ELG Esports  |  თარიღი: 5 აგვისტო, 2021',
    },
    {
      image: '../../../assets/home/team.png',
      tag: 'tags',
      title: 'Title',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      author: 'ავტორი: ELG Esports  |  თარიღი: 5 აგვისტო, 2021',
    },
    {
      image: '../../../assets/home/team.png',
      tag: 'tags',
      title: 'Title',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      author: 'ავტორი: ELG Esports  |  თარიღი: 5 აგვისტო, 2021',
    },
    {
      image: '../../../assets/home/team.png',
      tag: 'tags',
      title: 'Title',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      author: 'ავტორი: ELG Esports  |  თარიღი: 5 აგვისტო, 2021',
    },
  ];
}
