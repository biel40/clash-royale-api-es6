export function Clan(tag, name, description, location, members, memberList) {
    this.tag = tag;
    this.name = name;
    this.description = description || "No hem trobat descripció!";
    this.location = location;
    this.members = members;
    this.memberList = memberList;
}