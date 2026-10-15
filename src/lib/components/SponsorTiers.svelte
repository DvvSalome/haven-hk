<script lang="ts">
  import type { Sponsor } from "$lib/data/types";

  interface Props {
    heading: string;
    items: Sponsor[];
  }

  let { heading, items }: Props = $props();

  // Shown top to bottom. The pill colour is the tier's only visual code.
  const tiers = [
    { key: "diamond", label: "Diamond", pill: "bg-[#0fa3c7]" },
    { key: "gold", label: "Gold", pill: "bg-haven-gold" },
    { key: "ally", label: "Allies", pill: "bg-haven-green-deep" },
  ] as const;
</script>

{#if items.length > 0}
  <section id="sponsors" class="relative z-10 px-4 pb-[clamp(3rem,6vw,6rem)]">
    <div
      class="mx-auto max-w-[min(72rem,92vw)] rounded-[2rem] border-4 border-haven-brown-dark bg-haven-brown-light p-[clamp(1.5rem,3vw,3rem)] text-center shadow-[0_1rem_0_rgba(100,55,30,0.15)]"
    >
      <h2
        class="font-display text-[clamp(2.4rem,5vw,5rem)] leading-none text-haven-orange-deep"
      >
        {heading}
      </h2>

      {#each tiers as tier (tier.key)}
        {@const group = items.filter((s) => s.tier === tier.key)}
        {#if group.length > 0}
          <h3
            class="mx-auto mt-[clamp(1.5rem,3vw,2.5rem)] w-fit rounded-full px-6 py-2 font-display text-[clamp(1.25rem,2vw,2.3rem)] leading-none text-white {tier.pill}"
          >
            {tier.label}
          </h3>

          <ul class="mt-6 flex flex-wrap justify-center gap-[clamp(1rem,2vw,1.5rem)]">
            {#each group as sponsor (sponsor.name)}
              <li class="w-full sm:w-72">
                <a
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener"
                  class="flex min-h-36 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-white/60 bg-white/75 p-6 shadow-[0_0.25rem_0_hsla(20,50%,45%,0.18)] transition-transform hover:-translate-y-1"
                >
                  <span
                    class="font-display text-[clamp(1.5rem,2.6vw,2.6rem)] leading-none text-haven-orange-deep"
                  >
                    {sponsor.name}
                  </span>
                  {#if sponsor.role}
                    <span class="font-body text-[clamp(0.95rem,1.4vw,1.25rem)] text-haven-umber">
                      {sponsor.role}
                    </span>
                  {/if}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      {/each}
    </div>
  </section>
{/if}
