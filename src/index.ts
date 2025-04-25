const profile = {
    name: 'Caroline',
    age: 30,
    hobbies: ['photography', 'dance', 'guitar', 'writing']
};

type Profile = typeof profile;

type ProfileKeys = keyof Profile;

type ProfileHobbies = Profile['hobbies'];

type ProfileVisibility = {
    [key in ProfileKeys]? : boolean
};