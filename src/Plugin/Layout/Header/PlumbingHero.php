<?php

namespace Drupal\just_mod\Plugin\Layout\Header;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "Plumbing_hero",
 *   label = @Translation("Plumbing hero section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/header",
 *   template = "plumbing_hero",
 *   library = "just_mod/plumbing_hero",
 * )
 */
class PlumbingHero extends FormatageModelsSection
{
    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return parent::defaultConfiguration();
    }
}
