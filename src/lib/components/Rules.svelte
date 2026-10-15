<script lang="ts">
  import { rules, rulesHeading, rulesIntro } from "$lib/data/content";
</script>

<section id="rules" class="relative z-10 px-4 pb-[clamp(3rem,6vw,6rem)]">
  <div
    class="mx-auto max-w-[min(72rem,92vw)] rounded-[2rem] border-4 border-haven-brown-dark bg-haven-brown-light p-[clamp(1.5rem,3vw,3rem)] shadow-[0_1rem_0_rgba(100,55,30,0.15)]"
  >
    <h2
      class="text-center font-display text-[clamp(2.4rem,5vw,5rem)] leading-none text-haven-orange-deep"
    >
      {rulesHeading}
    </h2>
    <p
      class="mx-auto mt-4 max-w-[40rem] text-center font-body text-[clamp(1rem,1.6vw,1.35rem)] text-haven-umber"
    >
      {rulesIntro}
    </p>

    <ol class="mx-auto mt-[clamp(1.5rem,3vw,2.5rem)] grid max-w-[46rem] gap-[clamp(1rem,2vw,1.5rem)]">
      {#each rules as rule, i}
        <li>
          <h3
            class="font-display text-[clamp(1.4rem,2.2vw,2rem)] leading-none text-haven-orange-deep"
          >
            {i + 1}. {rule.title}
          </h3>
          <p class="mt-1 font-body text-[clamp(1rem,1.5vw,1.3rem)] leading-snug text-haven-umber">
            {rule.body}
          </p>
        </li>
      {/each}
    </ol>
  </div>
</section>
