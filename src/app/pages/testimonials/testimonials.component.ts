import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials:Array<any> = [
    {text:`After my first private session with a wonderful <a href="https://www.thetahealing.com/" target="_blank">ThetaHealer®</a> Barbie, I continued having weekly sessions. 
      Barbie has been helping me to remove self-sabotaging patterns, release anger and trauma from various types of abuse. 
      This technique has helped me remove fears, blockages, and negative patterns in my work and relationships, and increase self-confidence. 
      I have no more anxiety and Am increasingly becoming more positive in all aspects of life. 
      We release the pain, shock and trauma we experience from the painful situations, while solidifying the lessons we learned from them. I am thrilled to continue this journey with Barbie. 
      It’s been 4 months since I had my first ThetaHealing session, and I’m so grateful to have this powerful energy healing technique in my life thanks to Barbie. 
      She is warm-hearted and is truly passionate at what she does. Barbie has helped bring the best out of me and I can’t recommend her enough!`, by: 'Addy'},
    {text: `I highly recommend Barbara. She is an amazing healer. The meditations and conversations that we had made a very big difference in my life in many ways. 
      I am very grateful for all the positive energy and attention that was given to me as well as how I was shown how to feel better on my own.`, by: 'Debbie'},
    {text: `I came to Barbie with a serious case of TMJ following dental work. The pain was relentless and went on for 2 weeks until I finally decided to make an appointment. 
      I could not have imagined that the acute pain of dental work was directly connected to emotional blocks from a past relationship. 
      Within 24 hours of my session with Barbie, my pain was completely eliminated. I highly recommend this process and more than anything, Barbie’s compassionate form of energy work.`, by: 'Rose'},
    {text: `Anyone who is on their personal healing journey would do right by themselves to seek out the wisdom and guidance of Barbie Perez. 
      She will indicate to you that she is merely the vessel, connecting with Source Energy to heal old and ancient wounds and traumas. 
      However, her innate spirit and abundant love is what sets her apart and makes her such an incredible healer. 
      Her work breaks down spiritual and emotional blockages I didn&#39;t even realize I had. 
      I feel so lucky to know Barbie and my heart swells with joy for anyone else who heals at her hands.`, by: 'Taylor'}
  ];

  constructor() { }

  ngOnInit(): void {
    // window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }

}
