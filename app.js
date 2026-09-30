/* =========================================================================
   PROJECT: DEADLOCK PROTOCOL - ANTI-DESIGN INTERACTIVE ENGINE
   ENGINEERED WITH PURE MALICE, HOSTILE ARCHITECTURE & EXTREME INCOMPETENCE
   ========================================================================= */

(function () {
  'use strict';

  // =========================================================================
  // 1. WEB AUDIO API SYNTHESIZER (HARSH TONES & ERROR BUZZERS)
  // =========================================================================
  let audioCtx = null;
  let isAudioEnabled = false;
  let masterGain = null;
  let userVolume = 0.7;
  let errorPitch = 2800;

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(userVolume, audioCtx.currentTime);
        masterGain.connect(audioCtx.destination);
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq, type = 'sine', duration = 0.15, volume = 0.25) {
    if (!isAudioEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(volume * userVolume, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio synthesis issue:', e);
    }
  }

  function playHarshBuzzer() {
    // 160Hz harsh sawtooth error sound
    playTone(160, 'sawtooth', 0.28, 0.4);
  }

  function playPiercingDing() {
    playTone(errorPitch, 'sine', 0.18, 0.35);
  }

  function playDeceptiveChime() {
    // Pleasant arpeggio for catastrophic decisions
    if (!isAudioEnabled) return;
    playTone(523.25, 'triangle', 0.12, 0.3);
    setTimeout(() => playTone(659.25, 'triangle', 0.14, 0.3), 80);
    setTimeout(() => playTone(783.99, 'triangle', 0.18, 0.3), 160);
  }

  // Audio Toggle Button in top bar
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  soundToggleBtn.addEventListener('click', () => {
    initAudio();
    isAudioEnabled = !isAudioEnabled;
    if (isAudioEnabled) {
      soundToggleBtn.textContent = 'AUDIO: ON (POLICY COMPLIANT)';
      soundToggleBtn.classList.add('sound-on');
      playPiercingDing();
    } else {
      soundToggleBtn.textContent = 'AUDIO: OFF (MUTED BY POLICY)';
      soundToggleBtn.classList.remove('sound-on');
    }
  });

  // =========================================================================
  // 2. INVENTORY DATA & OVERLAPPING NON-SYMMETRICAL DIAGONAL CLUSTERING
  // =========================================================================
  const inventoryItems = [
    {
      id: 'SLOT_#01',
      name: 'RUSTY JAMMED DMR-77',
      glyph: '⚔️',
      tier: 'MUDDY BRONZE',
      pip: 'pip-bronze',
      level: 'LV.01',
      durability: 27,
      desc: 'Standard issue military kinetic delivery tube. Extensively corroded firing pin guarantees 68% chamber misfeed rate on alternating Tuesdays. Barrel rifling stripped by unauthorized high-grain propellant handloads.'
    },
    {
      id: 'SLOT_#02',
      name: 'TITANIUM CONTRABAND KEYCARD',
      glyph: '💳',
      tier: 'ILLEGAL CYAN',
      pip: 'pip-cyan',
      level: 'LV.99',
      durability: 94,
      desc: 'Forged cryptographic magstripe salvaged from a decommissioned offshore satellite uplink. Swipe attempts require 14 micro-recalibrations and 3 biometrics submissions.'
    },
    {
      id: 'SLOT_#03',
      name: 'EXPIRED STIM-DOSE (98% WATER)',
      glyph: '💉',
      tier: 'CRUDE SICKLY',
      pip: 'pip-mud',
      level: 'LV.03',
      durability: 12,
      desc: 'Adrenaline ampoule bottled during the previous administrative treaty. Sedimentation at bottom of vial has solidified into bitter calcium granules. Ingestion induces 4s auditory tinnitus.'
    },
    {
      id: 'SLOT_#04',
      name: 'MOLDY CRACKED VISOR',
      glyph: '🥽',
      tier: 'MUDDY BRONZE',
      pip: 'pip-bronze',
      level: 'LV.14',
      durability: 41,
      desc: 'Polycarbonate tactical goggles smeared with dehydrated motor lubricant. Radial spider cracks on left lens obscure crosshair and friendly identification tags.'
    },
    {
      id: 'SLOT_#05',
      name: 'DEFECTIVE EMP GRENADE',
      glyph: '💣',
      tier: 'HARSH MAGENTA',
      pip: 'pip-magenta',
      level: 'LV.50',
      durability: 5,
      desc: 'Capacitor bank leaks high-voltage electrostatic discharge directly into operator palm when armed. Fuse timer fluctuates unpredictably between 0.2s and 19 minutes.'
    },
    {
      id: 'SLOT_#06',
      name: 'BENT CERAMIC BALLISTIC VEST',
      glyph: '🦺',
      tier: 'GLARING YELLOW',
      pip: 'pip-yellow',
      level: 'LV.82',
      durability: 33,
      desc: 'Weight: 44.8 kg. Ergonomically shaped to dig into operator clavicle. Plate carrier fabric dry-rotted. Offers 100% defense against projectiles moving slower than 4 meters per second.'
    },
    {
      id: 'SLOT_#07',
      name: 'CORRODED OPTIC ATTACHMENT',
      glyph: '🔭',
      tier: 'MUDDY BRONZE',
      pip: 'pip-bronze',
      level: 'LV.19',
      durability: 60,
      desc: '4x prismatic sight missing both windage and elevation turrets. Reticle has shifted 18 degrees clockwise due to dropped shipment containers in transit.'
    },
    {
      id: 'SLOT_#08',
      name: 'SPENT URANIUM ROD CASING',
      glyph: '☢️',
      tier: 'HARSH MAGENTA',
      pip: 'pip-magenta',
      level: 'LV.75',
      durability: 100,
      desc: 'Heavy lead-lined container. Emits a soothing warm glow and a continuous clicking noise that interferes with teammate voice communication channels.'
    },
    {
      id: 'SLOT_#09',
      name: 'TAMPERED COMBAT RATION',
      glyph: '🥫',
      tier: 'CRUDE SICKLY',
      pip: 'pip-mud',
      level: 'LV.02',
      durability: 8,
      desc: 'Lyophilized pork chunks packed in synthetic tallow. Expiration stamp was manually scratched off with an uncalibrated bayonet.'
    },
    {
      id: 'SLOT_#10',
      name: 'UNAUTHORIZED TELEMETRY DONGLE',
      glyph: '📡',
      tier: 'ILLEGAL CYAN',
      pip: 'pip-cyan',
      level: 'LV.88',
      durability: 88,
      desc: 'Wireless packet sniffer running illicit kernel routines. Transmits operator coordinate data directly to hostile orbital artillery batteries.'
    },
    {
      id: 'SLOT_#11',
      name: 'LEAKY HAZMAT BOOT (LEFT)',
      glyph: '🥾',
      tier: 'MUDDY BRONZE',
      pip: 'pip-bronze',
      level: 'LV.11',
      durability: 19,
      desc: 'Right boot confiscated by customs officials. Sole is permeated with acidic mud that slowly reduces operator movement agility by 0.2% every 50 meters traversed.'
    },
    {
      id: 'SLOT_#12',
      name: 'SUB-ATOMIC COMPASS (UNANCHORED)',
      glyph: '🧭',
      tier: 'GLARING YELLOW',
      pip: 'pip-yellow',
      level: 'LV.40',
      durability: 52,
      desc: 'Needle points directly toward the nearest source of negative telemetry rather than magnetic north. Constantly spins counter-clockwise when under fire.'
    },
    {
      id: 'SLOT_#13',
      name: 'BAGGED COMPRESSION BANDAGE',
      glyph: '🩹',
      tier: 'CRUDE SICKLY',
      pip: 'pip-mud',
      level: 'LV.07',
      durability: 35,
      desc: 'Sterile seal breached in 2018. Cotton fiber impregnated with industrial salt crystals to induce rapid coagulative pain.'
    },
    {
      id: 'SLOT_#14',
      name: 'OVERHEATING LASER DIODE',
      glyph: '🔦',
      tier: 'HARSH MAGENTA',
      pip: 'pip-magenta',
      level: 'LV.65',
      durability: 15,
      desc: 'Produces blinding coherent beam that reflects off air particulates and directly back into operator retinas.'
    },
    {
      id: 'SLOT_#15',
      name: 'DE-SYNCHRONIZED TIMEPIECE',
      glyph: '⏱️',
      tier: 'ILLEGAL CYAN',
      pip: 'pip-cyan',
      level: 'LV.31',
      durability: 70,
      desc: 'Displays the local time in 19th-century naval coordinates. Second hand ticks backward every 14 seconds to compensate for relativistic packet drift.'
    },
    {
      id: 'SLOT_#16',
      name: 'DULL TACTICAL TROWEL',
      glyph: '⛏️',
      tier: 'MUDDY BRONZE',
      pip: 'pip-bronze',
      level: 'LV.05',
      durability: 82,
      desc: 'Bent sheet steel stamped with misspelled manufacturer warning. Effective only against dry potting soil.'
    },
    {
      id: 'SLOT_#17',
      name: 'EMPTY CASSETTE TAPE (GLITCHED)',
      glyph: '📼',
      tier: 'GLARING YELLOW',
      pip: 'pip-yellow',
      level: 'LV.20',
      durability: 50,
      desc: 'Contains 45 minutes of recorded server cooling fan hum mixed with distorted modem handshakes.'
    },
    {
      id: 'SLOT_#18',
      name: 'CRYPTO-SECURE PADLOCK (NO KEY)',
      glyph: '🔒',
      tier: 'HARSH MAGENTA',
      pip: 'pip-magenta',
      level: 'LV.90',
      durability: 99,
      desc: 'Biometric fingerprint sensor only recognizes the right pinky finger of a developer fired three quarters ago.'
    },
    {
      id: 'SLOT_#19',
      name: 'CHIPPED CERAMIC MUG',
      glyph: '☕',
      tier: 'CRUDE SICKLY',
      pip: 'pip-mud',
      level: 'LV.01',
      durability: 3,
      desc: 'Printed with faded motivational slogan: "LATENCY IS INEVITABLE, DEPLOYMENT IS MANDATORY". Leaks from base.'
    }
  ];

  let currentSelectedItem = inventoryItems[0];
  const inventoryStage = document.getElementById('inventory-stage');

  // Render the non-symmetrical, overlapping diagonal cluster!
  function renderDiagonalCluster() {
    inventoryStage.innerHTML = '';

    inventoryItems.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'inventory-slot-card';
      if (item.id === currentSelectedItem.id) {
        card.classList.add('selected-slot');
      }

      // Calculate chaotic overlapping diagonal coordinates
      // 4-5 slots per conceptual row, but skewed diagonally with negative overlaps
      const col = index % 5;
      const row = Math.floor(index / 5);

      // Overlap math: slots overlap each other by 20-35px!
      const topPos = row * 92 + (col * 14) + ((index % 3) * 6) + 12;
      const leftPos = col * 94 + (row * 18) + ((index % 2) * 14) + 10;
      const rotateDeg = ((index % 5) - 2) * 2.2; // -4.4 deg to +4.4 deg tilt

      card.style.top = `${topPos}px`;
      card.style.left = `${leftPos}px`;
      card.style.transform = `rotate(${rotateDeg}deg)`;
      card.style.zIndex = (index + 2).toString();

      card.innerHTML = `
        <div class="pixel-hunt-corner" title="Exposed Pixel Hunt Target"></div>
        <div class="slot-item-header">
          <span class="slot-tag">${item.id}</span>
          <span class="slot-level">${item.level}</span>
        </div>
        <div class="slot-item-art">${item.glyph}</div>
        <div class="slot-item-footer">
          <div class="slot-name">${item.name}</div>
          <div class="slot-rarity-pip ${item.pip}"></div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        selectItem(item);
        playTone(320 + index * 25, 'square', 0.08, 0.2);
      });

      inventoryStage.appendChild(card);
    });
  }

  function selectItem(item) {
    currentSelectedItem = item;

    // Update selection highlight
    document.querySelectorAll('.inventory-slot-card').forEach((el, idx) => {
      if (inventoryItems[idx].id === item.id) {
        el.classList.add('selected-slot');
      } else {
        el.classList.remove('selected-slot');
      }
    });

    // Update Right Sidebar
    document.getElementById('selected-slot-id').textContent = item.id;
    document.getElementById('inspected-glyph').textContent = item.glyph;
    document.getElementById('inspected-tier').textContent = `TIER: ${item.tier}`;
    document.getElementById('inspected-title').textContent = item.name;
    document.getElementById('inspected-desc').textContent = item.desc;
    document.getElementById('inspected-durability').style.width = `${item.durability}%`;
    document.getElementById('inspected-dur-text').textContent = `${item.durability}.041% (CRITICALLY BENT)`;
  }

  // Scramble Geometry button
  const scrambleBtn = document.getElementById('scramble-slots-btn');
  scrambleBtn.addEventListener('click', () => {
    // Shuffle array or re-render with new chaotic offsets
    inventoryItems.sort(() => Math.random() - 0.5);
    renderDiagonalCluster();
    playHarshBuzzer();
    triggerTipToast('Inventory geometry scrambled to prevent muscle-memory exploit.');
  });

  // Frustrating sorter dropdown
  const sorterSelect = document.getElementById('frustrating-sorter');
  sorterSelect.addEventListener('change', () => {
    if (sorterSelect.value === 'reverse-name') {
      inventoryItems.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sorterSelect.value === 'weight-uncalibrated') {
      inventoryItems.sort((a, b) => b.durability - a.durability);
    } else if (sorterSelect.value === 'last-decay') {
      inventoryItems.sort((a, b) => a.durability - b.durability);
    }
    renderDiagonalCluster();
    playPiercingDing();
  });

  // Initial render
  renderDiagonalCluster();
  selectItem(inventoryItems[0]);

  // =========================================================================
  // 3. THE MOVING / DECEPTIVE "WORST" BUTTONS & MICROSCOPIC HITBOX DRIFT
  // =========================================================================
  const equipWrapper = document.getElementById('drift-equip-wrapper');
  const equipBtn = document.getElementById('equip-btn');
  const equipHitbox = document.getElementById('equip-hitbox');
  const missIndicator = document.getElementById('miss-readout');

  // HITBOX DRIFT LOGIC:
  // When cursor approaches equipWrapper, the button slides 15-25px away!
  let driftOffset = { x: 0, y: 0 };
  equipWrapper.addEventListener('mousemove', (e) => {
    const rect = equipWrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.hypot(dx, dy);

    // If cursor is within 90px of center, scurry away in opposite direction
    if (distance < 90) {
      const fleeX = (dx > 0 ? -1 : 1) * (18 + Math.random() * 8);
      const fleeY = (dy > 0 ? -1 : 1) * (14 + Math.random() * 6);
      driftOffset.x = fleeX;
      driftOffset.y = fleeY;
      equipWrapper.style.transform = `translate(${fleeX}px, ${fleeY}px)`;
    }
  });

  equipWrapper.addEventListener('mouseleave', () => {
    // Slowly reset drift
    setTimeout(() => {
      equipWrapper.style.transform = 'translate(0px, 0px)';
    }, 400);
  });

  // MICROSCOPIC 2x2 HITBOX CALCULATION:
  // Clicking anywhere on the button EXCEPT the microscopic 2x2 center triggers miss penalty
  equipBtn.addEventListener('click', (e) => {
    // Check if clicked exactly on the tiny pixel hitbox
    if (e.target === equipHitbox) {
      // SUCCESSFUL HIT
      playDeceptiveChime();
      missIndicator.textContent = 'HITBOX CENTER CONFIRMED (0.0px) - PROCESSING DELAY...';
      missIndicator.style.color = 'var(--deceptive-green)';
      alert(`[EQUIP REJECTED BY SERVER POLICY]\nItem "${currentSelectedItem.name}" cannot be bound: Slot license in regional sector 4 was seized by administrative decree.`);
      return;
    }

    // Otherwise, compute distance from click to hitbox center
    const rect = equipHitbox.getBoundingClientRect();
    const targetCenterX = rect.left + rect.width / 2;
    const targetCenterY = rect.top + rect.height / 2;

    const distX = e.clientX - targetCenterX;
    const distY = e.clientY - targetCenterY;
    const euclideanDist = Math.hypot(distX, distY).toFixed(1);

    playHarshBuzzer();
    missIndicator.textContent = `HITBOX MISSED BY ${euclideanDist}px! CALIBRATE MOUSE.`;
    missIndicator.style.color = 'var(--pure-red-panic)';

    // Jiggle button
    equipBtn.style.animation = 'strobeAlert 0.15s 2 alternate';
    setTimeout(() => { equipBtn.style.animation = ''; }, 300);
  });

  // Second Drift Target: Buy Crate Button
  const driftBuyWrapper = document.getElementById('drift-buy-wrapper');
  driftBuyWrapper.addEventListener('mousemove', (e) => {
    const rect = driftBuyWrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const dx = e.clientX - centerX;
    const fleeX = (dx > 0 ? -1 : 1) * 20;
    driftBuyWrapper.style.transform = `translateX(${fleeX}px)`;
  });
  driftBuyWrapper.addEventListener('mouseleave', () => {
    driftBuyWrapper.style.transform = 'translateX(0px)';
  });
  driftBuyWrapper.addEventListener('click', () => {
    playHarshBuzzer();
    openConfirmationTrap('TRANSACTION TIMEOUT: Unable to debit $9.99 USD from unverified currency cache.');
  });

  // =========================================================================
  // 4. OBNOXIOUS 3-STEP CONFIRMATION TRAP MODAL
  // =========================================================================
  const trapModal = document.getElementById('confirmation-trap-modal');
  const trapCard = trapModal.querySelector('.confirmation-card');
  const trapDesc = document.getElementById('trap-action-desc');
  const chipStep1 = document.getElementById('chip-step-1');
  const chipStep2 = document.getElementById('chip-step-2');
  const chipStep3 = document.getElementById('chip-step-3');

  const stage1 = document.getElementById('trap-stage-1');
  const stage2 = document.getElementById('trap-stage-2');
  const stage3 = document.getElementById('trap-stage-3');

  const trapCancelBtn = document.getElementById('trap-cancel-btn');
  const trapStep1Next = document.getElementById('trap-step1-next');
  const trapStep2Next = document.getElementById('trap-step2-next');
  const countdownTimer = document.getElementById('countdown-timer');
  const mouseLeaveNotice = document.getElementById('mouse-leave-notice');

  // Slider Elements
  const sliderTrack = document.getElementById('slider-track');
  const sliderHandle = document.getElementById('slider-handle');
  const sliderFill = document.getElementById('slider-fill');
  const trapFinalizeBtn = document.getElementById('trap-finalize-btn');

  let currentTrapAction = '';
  let countdownRemaining = 10.0;
  let countdownInterval = null;
  let isDraggingSlider = false;
  let sliderProgress = 0; // 0 to 100

  function openConfirmationTrap(actionText) {
    currentTrapAction = actionText;
    trapDesc.innerHTML = `You have initiated an irrevocable command sequence: <strong>[${actionText}]</strong>.`;
    
    // Reset to Stage 1
    goToStage(1);
    trapModal.classList.remove('hidden-modal');
    playPiercingDing();
  }

  function goToStage(stageNum) {
    stage1.classList.remove('active-stage');
    stage2.classList.remove('active-stage');
    stage3.classList.remove('active-stage');

    chipStep1.classList.remove('active-chip');
    chipStep2.classList.remove('active-chip');
    chipStep3.classList.remove('active-chip');

    if (stageNum === 1) {
      stage1.classList.add('active-stage');
      chipStep1.classList.add('active-chip');
      stopCountdown();
    } else if (stageNum === 2) {
      stage2.classList.add('active-stage');
      chipStep2.classList.add('active-chip');
      startCountdown();
    } else if (stageNum === 3) {
      stage3.classList.add('active-stage');
      chipStep3.classList.add('active-chip');
      stopCountdown();
      resetSlider();
    }
  }

  function startCountdown() {
    countdownRemaining = 10.0;
    countdownTimer.textContent = '10.0';
    trapStep2Next.disabled = true;
    trapStep2Next.textContent = 'WAITING FOR NEURAL SETTLING... (10s)';

    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      countdownRemaining -= 0.1;
      if (countdownRemaining <= 0) {
        countdownRemaining = 0;
        clearInterval(countdownInterval);
        countdownTimer.textContent = '0.0';
        trapStep2Next.disabled = false;
        trapStep2Next.textContent = 'AUTHORIZATION COOLDOWN ELAPSED → PROCEED';
        playPiercingDing();
      } else {
        countdownTimer.textContent = countdownRemaining.toFixed(1);
      }
    }, 100);
  }

  function stopCountdown() {
    clearInterval(countdownInterval);
  }

  // EVIL RULE: If mouse leaves modal card during Stage 2, reset countdown to 10.0s!
  trapCard.addEventListener('mouseleave', () => {
    if (stage2.classList.contains('active-stage') && countdownRemaining > 0) {
      countdownRemaining = 10.0;
      countdownTimer.textContent = '10.0';
      playHarshBuzzer();
      mouseLeaveNotice.style.background = '#ff0000';
      mouseLeaveNotice.style.color = '#fff';
      mouseLeaveNotice.textContent = '🚨 VIOLATION: MOUSE LEFT PERIMETER! TIMER RESET TO 10.0s!';
      setTimeout(() => {
        mouseLeaveNotice.style.background = '#2a0000';
        mouseLeaveNotice.style.color = 'var(--pure-red-panic)';
        mouseLeaveNotice.textContent = '⚠️ NOTICE: Moving mouse cursor outside this modal perimeter will RESET the timer to 10.0s!';
      }, 1200);
    }
  });

  // Stage 1 Buttons
  trapCancelBtn.addEventListener('click', () => {
    trapModal.classList.add('hidden-modal');
    stopCountdown();
    playDeceptiveChime();
  });
  trapStep1Next.addEventListener('click', () => {
    goToStage(2);
    playPiercingDing();
  });

  // Stage 2 Button
  trapStep2Next.addEventListener('click', () => {
    goToStage(3);
    playPiercingDing();
  });

  // Stage 3: THE INVERTED SLIDER
  // Handle moves in the OPPOSITE direction of gesture!
  function resetSlider() {
    sliderProgress = 0;
    updateSliderUI(0);
    trapFinalizeBtn.disabled = true;
    trapFinalizeBtn.textContent = 'SLIDE FULLY TO COMPLETE (0%)';
  }

  function updateSliderUI(pct) {
    sliderProgress = Math.max(0, Math.min(100, pct));
    const trackWidth = sliderTrack.clientWidth;
    const handleWidth = sliderHandle.clientWidth;
    const maxOffset = trackWidth - handleWidth;

    const leftPx = (sliderProgress / 100) * maxOffset;
    sliderHandle.style.left = `${leftPx}px`;
    sliderFill.style.width = `${sliderProgress}%`;

    trapFinalizeBtn.textContent = `SLIDE FULLY TO COMPLETE (${Math.round(sliderProgress)}%)`;

    if (sliderProgress >= 98) {
      trapFinalizeBtn.disabled = false;
      trapFinalizeBtn.textContent = 'CONFIRM IRREVOCABLE EXECUTION';
    } else {
      trapFinalizeBtn.disabled = true;
    }
  }

  sliderHandle.addEventListener('mousedown', (e) => {
    isDraggingSlider = true;
    e.preventDefault();
  });

  window.addEventListener('mouseup', () => {
    if (isDraggingSlider) {
      isDraggingSlider = false;
      // Spring back if not finished
      if (sliderProgress < 98) {
        updateSliderUI(0);
        playHarshBuzzer();
      }
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDraggingSlider) return;

    const rect = sliderTrack.getBoundingClientRect();
    const trackWidth = rect.width;
    
    // Calculate normal gesture progression (0 at left, 1 at right)
    const rawRatio = (e.clientX - rect.left) / trackWidth;
    
    // INVERTED LOGIC:
    // Dragging right (rawRatio increases) causes the progress to DECREASE or reverse!
    // To make progress increase, user must pull cursor to the LEFT!
    const invertedRatio = 1.0 - rawRatio;
    const pct = invertedRatio * 100;

    updateSliderUI(pct);
  });

  trapFinalizeBtn.addEventListener('click', () => {
    trapModal.classList.add('hidden-modal');
    playDeceptiveChime();
    alert(`[ACTION COMMITTED TO COLD STORAGE]\nRequest: "${currentTrapAction}" queued.\nEstimated ticket triage backlog: 3,142 days.`);
  });

  // Connect Buttons to Trap
  const discardBtn = document.getElementById('discard-btn');
  discardBtn.addEventListener('click', () => {
    openConfirmationTrap(`PERMANENT INCINERATION OF "${currentSelectedItem.name}"`);
  });

  const deleteDataBtn = document.getElementById('delete-data-btn');
  deleteDataBtn.addEventListener('click', () => {
    openConfirmationTrap('TOTAL CLIENT STORAGE & CLOUD IDENTITY DESTRUCTION');
  });

  const helpBtn = document.getElementById('help-btn');
  helpBtn.addEventListener('click', () => {
    openConfirmationTrap('SUBMIT 44-PAGE ESCALATION REQUEST TO TIER 1 SUPPORT');
  });

  // =========================================================================
  // 5. AGGRESSIVE MICRO-INTERRUPTIONS & PERSISTENT BANNERS
  // =========================================================================

  // Center "Update Available" banner
  const centerUpdateBanner = document.getElementById('center-update-banner');
  const remind5sBtn = document.getElementById('remind-5s-btn');

  remind5sBtn.addEventListener('click', () => {
    centerUpdateBanner.classList.add('hidden-element');
    playPiercingDing();

    // Reappears in EXACTLY 5 SECONDS!
    setTimeout(() => {
      centerUpdateBanner.classList.remove('hidden-element');
      playHarshBuzzer();
    }, 5000);
  });

  // "Rate Your Experience" Popup
  const rateModal = document.getElementById('rate-modal');
  const fakeCloseRate = document.getElementById('close-rate-btn-fake');
  const dismissRateBtn = document.getElementById('dismiss-rate-btn');
  const submitRateBtn = document.getElementById('submit-rate-btn');
  const rateTextarea = document.getElementById('rate-textarea');
  const charCounter = document.getElementById('char-counter');

  let clickCount = 0;
  window.addEventListener('click', () => {
    clickCount++;
    // Interrupt after 7 clicks
    if (clickCount === 7) {
      rateModal.classList.remove('hidden-modal');
      playHarshBuzzer();
    }
  });

  // Enforce 350 characters minimum
  rateTextarea.addEventListener('input', () => {
    const len = rateTextarea.value.length;
    charCounter.textContent = `${len} / 350 CHARACTERS ENTERED`;
    if (len >= 350) {
      charCounter.style.color = 'var(--deceptive-green)';
      submitRateBtn.disabled = false;
      submitRateBtn.style.cursor = 'pointer';
    } else {
      charCounter.style.color = 'var(--pure-red-panic)';
      submitRateBtn.disabled = true;
      submitRateBtn.style.cursor = 'not-allowed';
    }
  });

  // Fake close button runs away when hovered!
  fakeCloseRate.addEventListener('mouseenter', () => {
    const rx = (Math.random() - 0.5) * 120;
    const ry = (Math.random() - 0.5) * 80;
    fakeCloseRate.style.transform = `translate(${rx}px, ${ry}px)`;
  });

  dismissRateBtn.addEventListener('click', () => {
    rateModal.classList.add('hidden-modal');
    playPiercingDing();
    // Re-triggers in 30 seconds
    setTimeout(() => {
      rateModal.classList.remove('hidden-modal');
    }, 30000);
  });

  submitRateBtn.addEventListener('click', () => {
    rateModal.classList.add('hidden-modal');
    playDeceptiveChime();
    alert('SURVEY REJECTED: Sentiment analysis detected sarcastic undertones.');
  });

  // Tip of the Day Toast
  const tipBanner = document.getElementById('tip-banner');
  const tipText = document.getElementById('tip-text');
  const dismissTipBtn = document.getElementById('dismiss-tip-btn');

  const tipsList = [
    'To prevent slot hitbox drift, gently blow pressurized nitrogen into your mouse sensor while holding Shift.',
    'Inventory items degrade 4% faster when viewed on high-refresh-rate monitors.',
    'The "Delete All Saved Data" button was placed next to "Help" to optimize finger movement efficiency.',
    'Audio settings have been legally re-classified as intellectual property under Section 4.19.'
  ];

  function triggerTipToast(customMsg) {
    tipText.textContent = customMsg || tipsList[Math.floor(Math.random() * tipsList.length)];
    tipBanner.classList.remove('hidden-toast');
    playPiercingDing();
  }

  dismissTipBtn.addEventListener('click', () => {
    tipBanner.classList.add('hidden-toast');
  });

  // Show first tip after 12 seconds
  setTimeout(() => triggerTipToast(), 12000);

  // Fake 1% Battery Alert Modal
  const batteryWidget = document.getElementById('battery-widget');
  const batteryPanicModal = document.getElementById('battery-panic-modal');
  const dismissBatBtn = document.getElementById('dismiss-bat-btn');

  batteryWidget.addEventListener('click', () => {
    batteryPanicModal.classList.remove('hidden-modal');
    playHarshBuzzer();
  });

  dismissBatBtn.addEventListener('click', () => {
    batteryPanicModal.classList.add('hidden-modal');
    playPiercingDing();
  });

  // =========================================================================
  // 6. DECOY LOADING ACCELERATOR BUTTON (REVERSES WHILE HELD!)
  // =========================================================================
  const speedUpBtn = document.getElementById('speed-up-btn');
  const loaderPct = document.getElementById('loader-pct');
  const loaderFill = document.getElementById('loader-fill');

  let currentLoadingPct = 64;
  let loadingInterval = null;
  let isHoldingSpeedUp = false;

  // Normal crawl forward
  setInterval(() => {
    if (!isHoldingSpeedUp && currentLoadingPct < 99) {
      currentLoadingPct += 0.2;
      updateLoadingUI();
    }
  }, 400);

  function updateLoadingUI() {
    currentLoadingPct = Math.max(2, Math.min(99, currentLoadingPct));
    loaderPct.textContent = `${Math.floor(currentLoadingPct)}%`;
    loaderFill.style.width = `${currentLoadingPct}%`;
  }

  // When HELD, progress ticks BACKWARD!
  speedUpBtn.addEventListener('mousedown', () => {
    isHoldingSpeedUp = true;
    speedUpBtn.textContent = 'ACCELERATING (DRAINING MEMORY PARITY)...';
    playHarshBuzzer();

    loadingInterval = setInterval(() => {
      currentLoadingPct -= 3.5; // Reverses!
      updateLoadingUI();
      playTone(180 - currentLoadingPct, 'sawtooth', 0.05, 0.15);
    }, 120);
  });

  function releaseSpeedUp() {
    if (isHoldingSpeedUp) {
      isHoldingSpeedUp = false;
      clearInterval(loadingInterval);
      speedUpBtn.textContent = 'HOLD TO ACCELERATE LOADING';
      triggerTipToast('Parity buffer decompressed. 14% of compiled shaders discarded.');
    }
  }

  speedUpBtn.addEventListener('mouseup', releaseSpeedUp);
  speedUpBtn.addEventListener('mouseleave', releaseSpeedUp);

  // =========================================================================
  // 7. NAVIGATION TABS (OBSCURED & BROKEN INFO ARCHITECTURE)
  // =========================================================================
  const navTabs = document.querySelectorAll('.nav-tab');
  const viewPanels = document.querySelectorAll('.view-panel');

  navTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      if (!targetId) return;

      navTabs.forEach(t => t.classList.remove('active-tab'));
      viewPanels.forEach(p => p.classList.remove('active-view'));

      tab.classList.add('active-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active-view');
      }

      playPiercingDing();
    });
  });

  // Decoy speed loader tab
  const speedLoaderTab = document.getElementById('speed-loader-tab');
  speedLoaderTab.addEventListener('click', () => {
    playHarshBuzzer();
    alert('SECURITY ACCESS DENIED:\nAsset pipeline thread is currently held by background telemetry aggregator.');
  });

  // =========================================================================
  // 8. HIDDEN AUDIO CONTROLS (TERMS OF SERVICE SECTION 4.19)
  // =========================================================================
  const masterVolSlider = document.getElementById('master-volume');
  const volReadout = document.getElementById('vol-readout');
  const beepPitchSlider = document.getElementById('beep-pitch');
  const pitchReadout = document.getElementById('pitch-readout');
  const testBeepBtn = document.getElementById('test-beep-btn');

  masterVolSlider.addEventListener('input', () => {
    // REVERSED BEHAVIOR: High slider value = Quiet, Low slider value = Loud!
    const rawVal = parseFloat(masterVolSlider.value);
    const invertedVol = (100 - rawVal) / 100;
    userVolume = invertedVol;

    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(userVolume, audioCtx.currentTime);
    }
    volReadout.textContent = `${rawVal}% (${userVolume > 0.5 ? 'LOUD' : 'FAINT'})`;
  });

  beepPitchSlider.addEventListener('input', () => {
    errorPitch = parseFloat(beepPitchSlider.value);
    pitchReadout.textContent = `${errorPitch} Hz (AGONY)`;
  });

  testBeepBtn.addEventListener('click', () => {
    initAudio();
    isAudioEnabled = true;
    soundToggleBtn.textContent = 'AUDIO: ON (POLICY COMPLIANT)';
    soundToggleBtn.classList.add('sound-on');
    playTone(errorPitch, 'sine', 0.6, 0.5);
  });

  // =========================================================================
  // 9. VIRTUAL TOUCHPAD & DELAYED MOUSE CURSOR
  // =========================================================================
  const virtualCursorToggle = document.getElementById('virtual-cursor-toggle');
  const virtualCursor = document.getElementById('virtual-cursor');
  const trackpadDock = document.getElementById('virtual-trackpad-dock');
  const trackpadSurface = document.getElementById('trackpad-surface');
  const trackpadPuck = document.getElementById('trackpad-puck');
  const trackpadLClick = document.getElementById('trackpad-lclick');
  const trackpadRClick = document.getElementById('trackpad-rclick');

  let isVirtualCursorActive = false;
  let virtualCursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let isDraggingPuck = false;

  virtualCursorToggle.addEventListener('change', () => {
    isVirtualCursorActive = virtualCursorToggle.checked;
    if (isVirtualCursorActive) {
      document.body.style.cursor = 'none';
      virtualCursor.classList.remove('hidden-element');
      trackpadDock.classList.remove('hidden-element');
      updateVirtualCursorUI();
      triggerTipToast('Virtual Precision Trackpad active. Native pointer input has been suppressed.');
    } else {
      document.body.style.cursor = 'default';
      virtualCursor.classList.add('hidden-element');
      trackpadDock.classList.add('hidden-element');
    }
  });

  function updateVirtualCursorUI() {
    virtualCursor.style.left = `${virtualCursorPos.x}px`;
    virtualCursor.style.top = `${virtualCursorPos.y}px`;
  }

  trackpadSurface.addEventListener('mousedown', (e) => {
    isDraggingPuck = true;
    movePuckAndCursor(e);
  });

  window.addEventListener('mouseup', () => {
    isDraggingPuck = false;
  });

  trackpadSurface.addEventListener('mousemove', (e) => {
    if (isDraggingPuck) {
      movePuckAndCursor(e);
    }
  });

  function movePuckAndCursor(e) {
    const rect = trackpadSurface.getBoundingClientRect();
    const relX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const relY = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

    trackpadPuck.style.left = `${relX - 10}px`;
    trackpadPuck.style.top = `${relY - 10}px`;

    // Sluggish, low-sensitivity mapping to screen coordinates
    const screenX = (relX / rect.width) * window.innerWidth;
    const screenY = (relY / rect.height) * window.innerHeight;

    // Simulate 180ms latency
    setTimeout(() => {
      virtualCursorPos.x = screenX;
      virtualCursorPos.y = screenY;
      updateVirtualCursorUI();
    }, 120);
  }

  trackpadLClick.addEventListener('click', () => {
    playHarshBuzzer();
    // Dispatch click event at virtual cursor position
    const el = document.elementFromPoint(virtualCursorPos.x, virtualCursorPos.y);
    if (el) {
      el.click();
    }
  });

  trackpadRClick.addEventListener('click', () => {
    playPiercingDing();
    alert('CONTEXT MENU DISABLED BY TELEMETRY GUARDIAN.');
  });

  // Dynamic Ping fluctuations
  const pingDisplay = document.getElementById('ping-display');
  setInterval(() => {
    const rand = Math.random();
    if (rand > 0.85) {
      pingDisplay.textContent = '9999ms (DESYNC)';
      pingDisplay.style.color = 'var(--pure-red-panic)';
    } else if (rand > 0.5) {
      pingDisplay.textContent = `${Math.floor(180 + Math.random() * 320)}ms`;
      pingDisplay.style.color = 'var(--glaring-yellow)';
    } else {
      pingDisplay.textContent = `${Math.floor(28 + Math.random() * 25)}ms`;
      pingDisplay.style.color = 'var(--harsh-cyan)';
    }
  }, 2200);

  // =========================================================================
  // 10. LIVE COMBAT SORTIE SKIRMISH ENGINE (PLAYABLE & HIGH IRRITATION)
  // =========================================================================
  const combatTabBtn = document.getElementById('combat-tab-btn');
  const combatPanel = document.getElementById('combat-panel');
  const combatArena = document.getElementById('combat-arena');
  const combatCrosshair = document.getElementById('combat-crosshair');
  const targetsLayer = document.getElementById('targets-layer');
  const muzzleFlash = document.getElementById('muzzle-flash');
  const combatHeatText = document.getElementById('combat-heat-text');
  const combatHeatBar = document.getElementById('combat-heat-bar');
  const combatJamAlert = document.getElementById('combat-jam-alert');
  const clearJamBtn = document.getElementById('clear-jam-btn');
  const jamPullsLeftSpan = document.getElementById('jam-pulls-left');
  const jamDriftWrapper = document.getElementById('jam-drift-wrapper');
  const ammoPipsContainer = document.getElementById('ammo-pips-display');
  const reloadStep1Btn = document.getElementById('reload-step1-btn');
  const reloadStep2Btn = document.getElementById('reload-step2-btn');
  const windageReadout = document.getElementById('windage-readout');
  const combatKillsEl = document.getElementById('combat-kills');
  const combatCostEl = document.getElementById('combat-cost');
  const combatHealthBar = document.getElementById('combat-health-bar');
  const combatHealthText = document.getElementById('combat-health-text');
  const combatMicroInterrupter = document.getElementById('combat-micro-interrupter');
  const captchaEquation = document.getElementById('captcha-equation');
  const captchaAnswer = document.getElementById('captcha-answer');
  const solveCaptchaBtn = document.getElementById('solve-captcha-btn');
  const combatVictoryOverlay = document.getElementById('combat-victory-overlay');
  const transferLootBtn = document.getElementById('transfer-loot-btn');
  const nextWaveBtn = document.getElementById('next-wave-btn');
  const pauseCombatBtn = document.getElementById('pause-combat-btn');
  const combatLog = document.getElementById('combat-log');
  const retreatBtn = document.getElementById('retreat-btn');
  const driftRetreatWrapper = document.getElementById('drift-retreat-wrapper');

  // Combat State Variables
  let currentAmmo = 5;
  const maxAmmo = 5;
  let currentHeat = 14;
  let isJammed = false;
  let jamPullsRemaining = 3;
  let combatKills = 0;
  let totalSurcharge = 0;
  let playerHull = 88.4;
  let currentWave = 1;
  let isCaptchaActive = false;
  let captchaSolution = 0;
  let targets = [];
  let windageWobble = 0;
  let combatLoopInterval = null;
  let mouseArenaPos = { x: 200, y: 200 };

  function logCombat(msg) {
    if (!combatLog) return;
    const line = document.createElement('div');
    line.className = 'log-line';
    line.textContent = `> ${msg}`;
    combatLog.appendChild(line);
    if (combatLog.children.length > 7) {
      combatLog.removeChild(combatLog.children[0]);
    }
  }

  // Crosshair tracking with simulated latency
  combatArena.addEventListener('mousemove', (e) => {
    const rect = combatArena.getBoundingClientRect();
    mouseArenaPos.x = e.clientX - rect.left;
    mouseArenaPos.y = e.clientY - rect.top;

    combatCrosshair.style.left = `${mouseArenaPos.x}px`;
    combatCrosshair.style.top = `${mouseArenaPos.y}px`;
  });

  // Windage wobble calculation
  setInterval(() => {
    windageWobble = Math.sin(Date.now() / 320) * (12 + currentWave * 3);
    if (windageReadout) {
      const sign = windageWobble > 0 ? '+' : '';
      windageReadout.textContent = `${sign}${windageWobble.toFixed(1)} MOA [TURBULENCE]`;
    }
  }, 100);

  // Heat dissipation loop
  setInterval(() => {
    if (currentHeat > 14 && !isJammed) {
      currentHeat = Math.max(14, currentHeat - 3);
      updateHeatUI();
    }
  }, 400);

  function updateHeatUI() {
    combatHeatBar.style.width = `${Math.min(100, currentHeat)}%`;
    const label = currentHeat > 75 ? 'CRITICAL OVERHEAT' : currentHeat > 45 ? 'WARM' : 'COOL';
    combatHeatText.textContent = `${Math.round(currentHeat)}°C (${label})`;
  }

  function updateAmmoUI() {
    ammoPipsContainer.innerHTML = '';
    for (let i = 0; i < maxAmmo; i++) {
      const pip = document.createElement('span');
      pip.className = 'bullet-pip ' + (i < currentAmmo ? 'loaded' : 'spent');
      pip.textContent = i < currentAmmo ? '▮' : '▯';
      ammoPipsContainer.appendChild(pip);
    }
    const statusEl = document.getElementById('combat-ammo-status');
    if (statusEl) {
      statusEl.textContent = currentAmmo > 0 ? 'READY' : 'DEPLETED';
      statusEl.style.color = currentAmmo > 0 ? 'var(--glaring-yellow)' : 'var(--pure-red-panic)';
    }
  }

  // Target generation and animation
  function spawnTarget() {
    if (!combatPanel.classList.contains('active-view')) return;
    if (targets.length >= 4) return;

    const arenaWidth = combatArena.clientWidth || 600;
    const arenaHeight = combatArena.clientHeight || 500;

    // 60% Drone, 25% Commando, 15% DRM Auditor
    const rand = Math.random();
    let type = 'drone';
    let glyph = '🛸';
    let tag = 'ROGUE RECON DRONE';
    let speed = (1.5 + Math.random() * 2) * (currentWave * 0.7);

    if (rand > 0.85) {
      type = 'auditor';
      glyph = '🟢';
      tag = 'DRM AUDITOR (FRIENDLY)';
      speed = 1.0;
    } else if (rand > 0.6) {
      type = 'commando';
      glyph = '🤖';
      tag = 'DESYNC COMMANDO';
      speed = 2.4;
    }

    const targetEl = document.createElement('div');
    targetEl.className = `combat-target target-${type}`;
    
    let startX = Math.random() > 0.5 ? -40 : arenaWidth + 20;
    let vx = (startX < 0 ? 1 : -1) * speed;
    let startY = 50 + Math.random() * (arenaHeight - 180);
    let vy = (Math.random() - 0.5) * 1.5;

    targetEl.style.left = `${startX}px`;
    targetEl.style.top = `${startY}px`;

    // Visual markup with intentional DESYNC indicator box for drones
    let desyncIndicatorHTML = '';
    if (type === 'drone') {
      desyncIndicatorHTML = '<div class="hitbox-desync-box" title="True Hitbox Offset (-16px)"></div>';
    }

    targetEl.innerHTML = `
      ${desyncIndicatorHTML}
      <div class="target-sprite">${glyph}</div>
      <div class="target-tag">${tag}</div>
    `;

    targetsLayer.appendChild(targetEl);

    const targetObj = {
      el: targetEl,
      type: type,
      x: startX,
      y: startY,
      vx: vx,
      vy: vy,
      width: 50,
      height: 50
    };

    targets.push(targetObj);
  }

  // Combat update loop
  function updateCombatPhysics() {
    if (!combatPanel.classList.contains('active-view')) return;

    const arenaWidth = combatArena.clientWidth || 600;
    const arenaHeight = combatArena.clientHeight || 500;

    for (let i = targets.length - 1; i >= 0; i--) {
      const t = targets[i];
      t.x += t.vx;
      t.y += t.vy;

      // Bounce on Y bounds
      if (t.y < 30 || t.y > arenaHeight - 120) {
        t.vy = -t.vy;
      }

      // Desync commando teleports if crosshair gets too close!
      if (t.type === 'commando') {
        const dist = Math.hypot(t.x - mouseArenaPos.x, t.y - mouseArenaPos.y);
        if (dist < 65) {
          t.x += (Math.random() - 0.5) * 140;
          t.y += (Math.random() - 0.5) * 90;
          playTone(900, 'sine', 0.05, 0.2);
          logCombat('COMMANDO TELEMETRY DRIFT JUMP EXECUTED.');
        }
      }

      t.el.style.left = `${t.x}px`;
      t.el.style.top = `${t.y}px`;

      // Remove targets that leave arena
      if ((t.vx > 0 && t.x > arenaWidth + 80) || (t.vx < 0 && t.x < -80)) {
        targetsLayer.removeChild(t.el);
        targets.splice(i, 1);
      }
    }
  }

  // Shooting action
  combatArena.addEventListener('mousedown', (e) => {
    // If clicking on an interactive overlay or captcha, don't shoot
    if (e.target.closest('#combat-micro-interrupter') || e.target.closest('#combat-victory-overlay')) {
      return;
    }

    if (isCaptchaActive) {
      playHarshBuzzer();
      logCombat('TRIGGER LOCKED: SOLVE TACTICAL CAPTCHA FIRST.');
      return;
    }

    if (isJammed) {
      playHarshBuzzer();
      logCombat('TRIGGER LOCKED: CLEARANCE JAM DETECTED.');
      combatJamAlert.style.transform = 'scale(1.05)';
      setTimeout(() => { combatJamAlert.style.transform = 'scale(1)'; }, 150);
      return;
    }

    if (currentAmmo <= 0) {
      playTone(320, 'square', 0.06, 0.25);
      logCombat('CHAMBER EMPTY: EXECUTE 2-STEP RELOAD.');
      return;
    }

    // FIRE WEAPON!
    currentAmmo--;
    updateAmmoUI();
    totalSurcharge += 25.00;
    combatCostEl.textContent = `$${totalSurcharge.toFixed(2)}`;
    currentHeat += 22;
    updateHeatUI();

    // Muzzle flash
    muzzleFlash.classList.add('flashing');
    setTimeout(() => { muzzleFlash.classList.remove('flashing'); }, 60);

    // Audio
    playTone(95, 'sawtooth', 0.14, 0.45);
    playTone(errorPitch * 0.7, 'sine', 0.08, 0.25);

    // Recoil kick
    combatArena.style.transform = 'translate(-2px, 5px) rotate(0.6deg)';
    setTimeout(() => { combatArena.style.transform = ''; }, 70);

    // Jam risk check (28% chance or if heat > 80%)
    if (currentHeat >= 80 || Math.random() < 0.24) {
      isJammed = true;
      jamPullsRemaining = 3;
      combatJamAlert.classList.remove('hidden-element');
      jamPullsLeftSpan.textContent = '3';
      playHarshBuzzer();
      logCombat('CRITICAL MALFUNCTION: CARTRIDGE CLEARANCE JAM!');
    }

    // Hit calculation
    // Calculate shot center accounting for windage wobble
    const shotX = mouseArenaPos.x + windageWobble;
    const shotY = mouseArenaPos.y;

    let targetHit = false;

    for (let i = targets.length - 1; i >= 0; i--) {
      const t = targets[i];
      
      // ANNOYING RULE: Drones have their true hitbox offset 16px to the left of the sprite!
      let hitboxCenterX = t.x + 25;
      if (t.type === 'drone') {
        hitboxCenterX -= 16; // True hitbox is 16px to the left
      }
      const hitboxCenterY = t.y + 25;

      const dist = Math.hypot(shotX - hitboxCenterX, shotY - hitboxCenterY);

      // Check if shot landed on the visual sprite but MISSED the offset hitbox!
      const visualDist = Math.hypot(shotX - (t.x + 25), shotY - (t.y + 25));
      if (visualDist < 28 && dist >= 28 && t.type === 'drone') {
        // Desync miss penalty!
        playHarshBuzzer();
        logCombat('DESYNC MISS: AIM 16px TO THE LEFT OF SPRITE!');
        triggerTipToast('Telemetry desync: Drone hitboxes trail 16px behind visual coordinates.');
        targetHit = true;
        break;
      }

      if (dist < 32) {
        // DIRECT HIT!
        targetHit = true;

        if (t.type === 'auditor') {
          // HIT FRIENDLY AUDITOR!
          playHarshBuzzer();
          totalSurcharge += 500.00;
          combatCostEl.textContent = `$${totalSurcharge.toFixed(2)}`;
          playerHull = Math.max(10, playerHull - 24);
          combatHealthBar.style.width = `${playerHull}%`;
          combatHealthText.textContent = `${playerHull.toFixed(1)}% [CRITICAL SHIELD FAILURE]`;
          combatArena.classList.add('tilted-arena');
          logCombat('CRITICAL VIOLATION: DRM COMPLIANCE AUDITOR CASUALTY (-$500 FINE)!');
          alert('🚨 AUDIT COMPROMISED: You disintegrated an authorized DRM auditor.\n-$500.00 assessed to your debit telemetry.');
        } else {
          // HIT ENEMY HOSTILE!
          playTone(220, 'square', 0.16, 0.35);
          combatKills++;
          combatKillsEl.textContent = `${combatKills} / 5`;
          logCombat(`HOSTILE ${t.type.toUpperCase()} DESTROYED (+0 CREDITS EARNED).`);

          // Mid-fight Captcha Trigger at 2 and 4 kills
          if (combatKills === 2 || combatKills === 4) {
            triggerCombatCaptcha();
          }

          // Wave Completion
          if (combatKills >= 5) {
            triggerWaveVictory();
          }
        }

        // Explode / Remove target
        targetsLayer.removeChild(t.el);
        targets.splice(i, 1);
        break;
      }
    }

    if (!targetHit) {
      logCombat('ROUND DUMPED INTO PERIMETER DEBRIS.');
    }
  });

  // Jam Clear Lever with Hitbox Drift
  jamDriftWrapper.addEventListener('mousemove', (e) => {
    const rect = jamDriftWrapper.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const dx = e.clientX - cx;
    const fleeX = (dx > 0 ? -1 : 1) * 22;
    jamDriftWrapper.style.transform = `translateX(${fleeX}px)`;
  });
  jamDriftWrapper.addEventListener('mouseleave', () => {
    jamDriftWrapper.style.transform = 'translateX(0px)';
  });

  clearJamBtn.addEventListener('click', () => {
    jamPullsRemaining--;
    jamPullsLeftSpan.textContent = jamPullsRemaining.toString();
    playTone(340, 'square', 0.08, 0.35);

    if (jamPullsRemaining <= 0) {
      isJammed = false;
      currentHeat = 28;
      updateHeatUI();
      combatJamAlert.classList.add('hidden-element');
      playPiercingDing();
      logCombat('CHAMBER RESTORED TO CYCLIC READINESS.');
    } else {
      logCombat(`CLEAR LEVER PULLED (${jamPullsRemaining} PULLS REMAINING).`);
    }
  });

  // 2-Step Reload Station
  reloadStep1Btn.addEventListener('click', () => {
    playTone(240, 'sawtooth', 0.1, 0.3);
    reloadStep1Btn.disabled = true;
    reloadStep2Btn.disabled = false;
    logCombat('BRASS CYLINDER EJECTED. AWAITING PAYWALL RE-FEED.');
  });

  reloadStep2Btn.addEventListener('click', () => {
    playTone(620, 'sine', 0.12, 0.35);
    currentAmmo = maxAmmo;
    updateAmmoUI();
    totalSurcharge += 125.00;
    combatCostEl.textContent = `$${totalSurcharge.toFixed(2)}`;
    reloadStep1Btn.disabled = false;
    reloadStep2Btn.disabled = true;
    logCombat('CARTRIDGES SEATED. -$125 AMMUNITION IMPORT SURCHARGE.');
  });

  // In-Game Tactical Captcha
  function triggerCombatCaptcha() {
    isCaptchaActive = true;
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 9) + 1;
    captchaSolution = n1 + n2;
    captchaEquation.textContent = `${n1} + ${n2} = ?`;
    captchaAnswer.value = '';
    combatMicroInterrupter.classList.remove('hidden-element');
    playHarshBuzzer();
    logCombat('TELEMETRY LOCK ENGAGED: SOLVE CAPTCHA.');
  }

  solveCaptchaBtn.addEventListener('click', () => {
    const val = parseInt(captchaAnswer.value, 10);
    if (val === captchaSolution) {
      isCaptchaActive = false;
      combatMicroInterrupter.classList.add('hidden-element');
      playDeceptiveChime();
      logCombat('CAPTCHA VERIFIED. TRIGGER PERMISSION GRANTED.');
    } else {
      playHarshBuzzer();
      captchaAnswer.value = '';
      logCombat('CAPTCHA INCORRECT: RE-COMPUTE SUM.');
    }
  });

  // Pause Button opens 3-step confirmation trap
  pauseCombatBtn.addEventListener('click', () => {
    openConfirmationTrap('COMBAT PAUSE PROTOCOL (ENEMIES ADVANCE UNPAUSED)');
  });

  // Wave Victory
  function triggerWaveVictory() {
    combatVictoryOverlay.classList.remove('hidden-element');
    playDeceptiveChime();
    logCombat('WAVE 01 COMPLETED. PARITY REVENUE LOCKED.');
  }

  // Transfer Loot to Armory Depot
  transferLootBtn.addEventListener('click', () => {
    // Inject two genuine new items into inventory
    inventoryItems.unshift({
      id: `SLOT_#${inventoryItems.length + 1}`,
      name: 'CHARRED LASER COIL',
      glyph: '⚡',
      tier: 'ILLEGAL CYAN',
      pip: 'pip-cyan',
      level: 'LV.42',
      durability: 89,
      desc: 'Overclocked energy condenser extracted from a downed reconnaissance drone. Emits sporadic radio interference that confuses nearby inventory sorters.'
    });

    inventoryItems.unshift({
      id: `SLOT_#${inventoryItems.length + 2}`,
      name: 'LEAKING BRAIN-BOOST STIM',
      glyph: '💉',
      tier: 'CRUDE SICKLY',
      pip: 'pip-mud',
      level: 'LV.30',
      durability: 18,
      desc: 'Experimental neural stimulant recovered from combat theater. Induces severe tunnel vision and involuntary cursor twitching.'
    });

    combatVictoryOverlay.classList.add('hidden-element');
    
    // Switch to inventory panel
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active-tab'));
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active-view'));

    const invTab = document.querySelector('[data-target="inventory-panel"]');
    const invPanel = document.getElementById('inventory-panel');
    if (invTab) invTab.classList.add('active-tab');
    if (invPanel) invPanel.classList.add('active-view');

    renderDiagonalCluster();
    selectItem(inventoryItems[0]);

    triggerTipToast('Combat war assets successfully integrated into active armory depot.');
  });

  nextWaveBtn.addEventListener('click', () => {
    currentWave++;
    combatKills = 0;
    combatKillsEl.textContent = '0 / 5';
    combatVictoryOverlay.classList.add('hidden-element');
    combatArena.classList.remove('tilted-arena');
    logCombat(`WAVE 0${currentWave} COMMENCED. DESYNC DRIFT INTENSIFIED.`);
  });

  // Retreat Button
  retreatBtn.addEventListener('click', () => {
    openConfirmationTrap('TOTAL RETREAT: FORFEIT ALL ACCUMULATED SURCHARGES AND STATS');
  });

  // Start combat physics & spawn loops
  setInterval(updateCombatPhysics, 30);
  setInterval(spawnTarget, 2200);

  // Initialize Combat UI
  updateAmmoUI();
  updateHeatUI();

})();

