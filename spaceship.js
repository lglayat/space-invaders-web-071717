class Spaceship{
  constructor(name,CrewMember,phasers,shields,cloaked=false,
    warpDrive="disengaged",phasersCharge="uncharged"){
    this.name = name
    this.CrewMember = CrewMember
    this.CrewMember.forEach(function(member){
      member.currentShip = this
    }.bind(this))
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge

    if(this.CrewMember.length === 0){
      this.docked = true
    } else{
      this.docked = false
    }
  }
}
