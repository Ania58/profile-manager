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

const visibilitySettings: ProfileVisibility = {}; 

function setVisibility(key: ProfileKeys, isVisible: boolean): void {
    visibilitySettings[key] = isVisible;
};

function getVisibleProfile(): Partial<Profile> {
    const visibleProfile: Partial<Profile> = {};
  
    for (const key in visibilitySettings) {
      if (key in profile && visibilitySettings[key as keyof Profile]) {
        (visibleProfile as any)[key] = profile[key as keyof Profile];
      }
    }
  
    return visibleProfile;
}
  
setVisibility('name', true);
setVisibility('age', false);
setVisibility('hobbies', true);
console.log(getVisibleProfile());
  
function resetVisibility(allVisible: boolean) {
    for (const key in profile) {
        visibilitySettings[key as ProfileKeys] = allVisible;
    }
};
resetVisibility(true);
console.log(visibilitySettings);

function toggleVisibility(key: ProfileKeys) {
    if (visibilitySettings[key] === true) {
        visibilitySettings[key] = false
    } else {
        visibilitySettings[key] = true
    }
};
toggleVisibility('age');
console.log(visibilitySettings);

function showProfile() {
    const visibleProfile = getVisibleProfile();
    for (const key in visibleProfile) {
        const typedKey = key as keyof Profile;

        if (Array.isArray(visibleProfile[typedKey])) {
            console.log(`${key} : ${(visibleProfile[typedKey]as string[]).join(',')}`);
        } else {
            console.log(`${key} : ${visibleProfile[typedKey]}`);
        }
    }
};

showProfile();