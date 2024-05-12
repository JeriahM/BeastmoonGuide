import {Wrapper, Header, Description, Forms, Lunari, Crafting, Gardening, Tiers} from './GridStyle.js';

const Guide = () => {
   return (
     <Wrapper>
      <Header>
      <h1>Beastmoon Guide</h1>
      </Header>
      <Description>
        <p> 
          <h2>So What is Beastmoon...</h2>
          Within Wizard101 there are two events each month <b>Hunt</b> and <b>Mayhem</b>.
          Hunt is a PvP capture the flag event, while Mayhem
          is a PvE where teammates work together to take out 3 waves of mobs.
          And the first thing one does in each mode is select a beast form.
        </p>
      </Description>
      <Forms>
        <p> 
          <h2>Beastmoon Forms</h2>
          Arguably the most important part of beastmoon is what form one uses
          and how good one can utilize said form. Naturally some are easier
          to learn than others, but they all have their perks. There are 10
          beasts, each with a variety of school types. Each event there are
          a few free base level forms. To unlock a form permanently, one needs
          a gold idol. Gold idols can be obtained during the events or by 
          unlocking the full season scroll. In hunt, filling up the event's progress 
          bar will gift one a specific gold idol. In Mayhem, there are multiple forms that may be crafted at the
          anvil in the arena. Gold idol upgrades the form's tier which unlocks
          it permanently for you. Further increasing tiers rises the base level 
          of the form for all events. After the first tier, lunari and normal
          idols of the beast are required to tier up. To craft a gold idol during
          Mayhem, one needs 10 moonstone dust reagents and 3 regular idols.
          Regular idols can be obtained by playing matches or gardening. Moonstone
          dust can be obtained by beating waves in Mayhem after the quest has
          been actived. 
        </p>
      </Forms>
      <Lunari>
        <p>
          <h2>Lunari</h2>
          Lunari is the currency of beastmoon. For the most part the only way to
          get is to grind matches. Naturally if one wins, they recieve more lunari.
          In Mayhem, one gets more lunari for each wave passed. The max lunari one
          can have at one time is 5k. Other ways to obtain lunari include through
          each beastmoon event's progress bar. Also throughout the scroll for each
          season there are lunari rewards. If the full scroll is unlocked, the amount
          of lunari rewarded increases immensly.
        </p>
      </Lunari>
      <Crafting>
        <p>
          <h2>Crafting</h2>
          Besides upgrading forms, lunari can also be used to buy crafting recipes.
          These recipes include different beastmoon seeds, outfit stitchs, and
          gold skeleton keys. After buying the recipes, obtaining the reagents
          will be from matches or from harvesting plants. So gardening is a
          great way to gain more reagents.
        </p>
      </Crafting>
      <Gardening>
        <p>
          <h2>Gardening</h2>
          Gardening the different beastmoon seeds gives many useful reagents
          including: threads used for clothing, treasure cards(tcs) for gardening,
          regular idols(of the school of plant), spellments, and battle coins.
          To get the moonstones needed to craft each schools respective seed,
          the best way is by farming either spirit or elemental plants. One of
          the major drawbacks to this approach is the fact that the maximum of
          beastmoon planters one wizard can get is three. The first two come
          after your first beastmoon match, the last one after your 25th match
          is completed. For the best farming, I would suggest farming over
          multiple wizards(also split the seed recipes across wizards). The tc
          that the plants drop can be used to instantly harvest a mature plant.
          There are three levels of the tc, Hasty Harvest(HH)3 which costs the
          most energy at 10 and is for the plants for each school. HH2 costs 5
          energy and is for spirit/elemental plants, while HH1 costs 1 energy
          and is for the regular beastmoon plant. Lookout for the double 
          gardening event, this doubles all reagents dropped from the plants
          and is what I'd suggest using the HH cards for. Also for farming 
          balance forms, the recipe needed is for harmonius seed <b>not balance</b>
        </p>
      </Gardening>
      <Tiers>
        <p>
          <h2>Tier updgrades</h2>
          Tier 1 - 1 Gold Idol (3 Regular Idols & 10 Moonstone Dust)<br/>
          Tier 2 - 6 Regular Idols & 600 Lunari<br/>
          Tier 3 - 12 Regular Idols & 1200 Lunari<br/>
          Tier 4 - 24 Regular Idols & 2400 Lunari<br/>
          Tier 5 - 48 Regular Idols & 4800 Lunari<br/>
        </p>
      </Tiers>
     </Wrapper>
     );
 };

 export default Guide;