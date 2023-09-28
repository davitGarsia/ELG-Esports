import { Injectable } from '@angular/core';
import { Teams } from '../teams.interface';

@Injectable({
  providedIn: 'root',
})
export class TeamsInfoService {
  constructor() {}

  // contributes to pagination
  getAllTeams() {
    return this.teams;
  }

  getTeamsPage(pageNumber: number, pageSize: number): any[] {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return this.teams.slice(startIndex, endIndex);
  }

  getTotalPages(pageSize: number): number {
    return Math.ceil(this.teams.length / pageSize);
  }

  teams: Teams[] = [
    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

     {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

     {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

     {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

     {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },

    {
      image: '../../../../assets/home/team.png',
      title: 'EGL TEAM',
      numMembers: '10 Members',
      wins: {
        tournament: 'CS:GO ELG Community Cup #1 - Georgia',
        prize: '150₾',
        location: 'საქართველო',
        registeredGroups: '30 / 80',
      },
      members: {
        photo: '../../../../assets/home/team.png',
        name: 'team member',
      },
    },
  ];
}
