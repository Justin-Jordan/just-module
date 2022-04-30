<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbing_help_section",
 *   label = @Translation("Plumbing help section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "plumbing_help_section",
 *   library = "just_mod/plumbing_help_section",
 * )
 */
class PlumbingHelpSection extends FormatageModelsSection
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
